import { Component, inject } from '@angular/core';
import { ListItemDetailsComponent } from "./list-item-details/list-item-details.component";
import { ListItemComponent } from "./list-item/list-item.component";
import { MatAccordion } from '@angular/material/expansion';
import { Store } from '@ngrx/store';
import { selectCards } from '../../store/cards/cards.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    ListItemDetailsComponent,
    ListItemComponent,
    MatAccordion,
    AsyncPipe,
],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  readonly store = inject(Store);
  cards$ = this.store.select(selectCards);
}
