import { Component, Input, inject, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { ListItemDetailsComponent } from '../list-item-details/list-item-details.component';
import { Card } from '../../../services/pokedex-data.model';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { selectSimilarPokemons } from '../../../store/cards/cards.selector';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [MatExpansionModule, ListItemDetailsComponent, AsyncPipe],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {
  @Input() cardData!: Card;
  @Input() indexNumber!: number;

  readonly store = inject(Store);
  similarPokemons$ = this.store.select(selectSimilarPokemons);

  readonly panelOpenState = signal(false);
}
