import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ListItemDetailsComponent } from "./list-item-details/list-item-details.component";
import { ListItemComponent } from "./list-item/list-item.component";
import { MatAccordion } from '@angular/material/expansion';
import { Store } from '@ngrx/store';
import { selectCards } from '../../store/cards/cards.selector';
import { AsyncPipe } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    ListItemDetailsComponent,
    ListItemComponent,
    MatAccordion,
    AsyncPipe,
    MatButtonModule,
],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  readonly store = inject(Store);

  @Output() loadMore = new EventEmitter<number>();

  cards$ = this.store.select(selectCards);

  loadMorePokemons(page: number) {
    this.loadMore.emit(page);
  }
}
