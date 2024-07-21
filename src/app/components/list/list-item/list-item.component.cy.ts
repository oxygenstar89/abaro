import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideMockStore } from '@ngrx/store/testing';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { MOCK_STORE, STORE_MOCK_CARDS } from "../../../store/store-mock-data";
import { ListItemComponent } from "./list-item.component";

describe('ListItemComponent', () => {

  it('can mount', () => {
    cy.mount(ListItemComponent, {
      componentProperties: {
        cardData: STORE_MOCK_CARDS[0],
        indexNumber: 1,
      },
      providers: [
        provideMockStore(MOCK_STORE),
        provideAnimationsAsync(),
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                subscriptSizing: 'dynamic'
            }
        },
      ]
    });
  })
})
