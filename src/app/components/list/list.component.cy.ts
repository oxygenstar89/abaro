import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { ListComponent } from "./list.component";
import { provideMockStore } from '@ngrx/store/testing';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { MOCK_STORE } from "../../store/store-mock-data";

describe('ListComponent', () => {

  it('can mount', () => {
    cy.mount(ListComponent, {
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
