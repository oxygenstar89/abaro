import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { EditDialogComponent } from "./edit-dialog.component";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

describe('EditDialogComponent', () => {

  it('can mount', () => {
    cy.mount(EditDialogComponent, {
      imports: [
      ],
      providers: [
        {
          provide: MatDialogRef<EditDialogComponent>,
          useValue: []
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            name: 'tee',
            currentValue: 240,
          }
        },
        provideAnimationsAsync(),
      ]
    });
  });

  it('edit value and emit new values', () => {
    const dialogMock = {
      close: () => { }
    };

    cy.mount(EditDialogComponent, {
      imports: [
      ],
      providers: [
        {
          provide: MatDialogRef<EditDialogComponent>,
          useValue: dialogMock
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            name: 'tee',
            currentValue: 240,
          }
        },
        provideAnimationsAsync(),
      ]
    });

    cy.get('.mat-mdc-input-element').type('23').get('button[type=submit]').click();
  });

})
