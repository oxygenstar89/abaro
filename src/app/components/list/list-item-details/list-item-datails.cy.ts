import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideMockStore } from '@ngrx/store/testing';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { MOCK_STORE, STORE_MOCK_CARDS, STORE_MOCK_SIMILAR_POKEMONS } from "../../../store/store-mock-data";
import { ListItemDetailsComponent } from "./list-item-details.component";

describe('ListItemDetailsComponent', () => {

  it('can mount', () => {
    cy.mount(ListItemDetailsComponent, {
      componentProperties: {
        cardDetails: STORE_MOCK_CARDS[0],
        indexNumber: 1,
        similarPokemons: STORE_MOCK_SIMILAR_POKEMONS
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
