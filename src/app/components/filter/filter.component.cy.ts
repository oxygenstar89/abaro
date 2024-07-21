import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { FilterComponent } from "./filter.component";
import { STORE_MOCK_TYPES } from "../../store/store-mock-data";
import { createOutputSpy } from "cypress/angular";
import { FilterType } from "../../services/pokedex-data.model";

describe('FilterComponent', () => {

  it('can mount', () => {
    cy.mount(FilterComponent, {
      componentProperties: {
        list: STORE_MOCK_TYPES,
        type: 'type',
      },
      providers: [
        provideAnimationsAsync(),
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                subscriptSizing: 'dynamic'
            }
        },
      ]
    });
  });


  it('select element from list end emit value', () => {
    cy.mount(FilterComponent, {
      componentProperties: {
        list: STORE_MOCK_TYPES,
        type: 'type',
        filterData: createOutputSpy<{type: FilterType, value: string}>('emitSelection'),
      },
      providers: [
        provideAnimationsAsync(),
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                subscriptSizing: 'dynamic'
            }
        },
      ],
    });

    cy.get('mat-select').click().get('mat-option').contains('Dragon').click();
    cy.get('@emitSelection').should('have.been.called');
  });
})
