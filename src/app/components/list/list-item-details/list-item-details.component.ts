import { AsyncPipe } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { Card, FilterTypePlural, SimilarPokemon, SimilarPokemons } from '../../../services/pokedex-data.model';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../../edit-dialog/edit-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { updateCardAttack, updateCardSupertype, updateCardTypes } from '../../../store/cards/cards.actions';
import { selectSubtypes, selectSupertypes, selectTypes } from '../../../store/types/types.selector';

@Component({
  selector: 'app-list-item-details',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatSelectModule, AsyncPipe],
  templateUrl: './list-item-details.component.html',
  styleUrl: './list-item-details.component.scss'
})
export class ListItemDetailsComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  readonly store = inject(Store);

  @Input() cardDetails!: Card;
  @Input() similarPokemons!: SimilarPokemons;
  @Input() indexNumber!: number;

  public imageLoaded = false;
  public showSimilarPokemons = false;
  public similar: SimilarPokemon[] = [];
  public types$ = this.store.select(selectTypes);
  public subtypes$ = this.store.select(selectSubtypes);
  public supertypes$ = this.store.select(selectSupertypes);

  ngOnInit(): void {
    if(this.cardDetails.types?.[0] && this.similarPokemons[this.cardDetails!.types![0]]) {
      this.showSimilarPokemons = true;
      const pokemonType: string = this.cardDetails!.types![0];
      this.similar = this.similarPokemons[pokemonType].slice(0, 6);
    }
  }


  scroll(id: string) {
    const element = document.getElementById(id)!;
    element.scrollIntoView({ behavior: "smooth" });
  }

  editAttack(index: number, dataToEdit: 'damage' | 'name', name: string ) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: {name, currentValue: this.cardDetails.attacks?.[index][dataToEdit]},
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result !== undefined) {
        this.store.dispatch(updateCardAttack({
          data: {
            cardIndex: this.indexNumber - 1,
            attackIndex: index,
            newValue: result,
            dataToEdit
          }
        }))
      }
    });
  }

  editType({value}: MatSelectChange, inTypeIndex: number, typeOfype: FilterTypePlural) {
    this.store.dispatch(updateCardTypes({
      data: {
        cardIndex: this.indexNumber - 1,
        typeIndex: inTypeIndex,
        typeOfype,
        newValue: value,
      }
    }))
  }

  editSupertype({value}: MatSelectChange) {
    this.store.dispatch(updateCardSupertype({
      data: {
        cardIndex: this.indexNumber - 1,
        newValue: value,
      }
    }))
  }
}
