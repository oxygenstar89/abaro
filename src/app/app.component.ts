import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Card, FilterType, SelectedFilters } from './services/pokedex-data.model';
import { ListComponent } from "./components/list/list.component";
import { FilterComponent } from "./components/filter/filter.component";
import { Subscription, combineLatest, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectSubtypes, selectSupertypes, selectTypes } from './store/types/types.selector';
import { loadSubtypes, loadSupertypes, loadTypes } from './store/types/types.actions';
import { selectCards, selectCardsLoadingState, selectSimilarPokemons } from './store/cards/cards.selector';
import { loadCards, loadCardsWithFilters, loadMore, setSimilarPokemons } from './store/cards/cards.actions';
import { PokedexDataService } from './services/pokedex-data.service';
import { MatButtonModule } from '@angular/material/button';
import { ThemingService } from './services/theming.service';
import { ChartComponent } from "./components/chart/chart.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AsyncPipe,
    ListComponent,
    FilterComponent,
    MatButtonModule,
    ChartComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  readonly store = inject(Store);
  readonly themingService = inject(ThemingService);
  readonly pokedexDataService = inject(PokedexDataService);

  private selectedFilters: SelectedFilters = {
    type: '',
    supertype: '',
    subtype: '',
  }
  private subscriptions = new Subscription;
  types$ = this.store.select(selectTypes);
  subtypes$ = this.store.select(selectSubtypes);
  supertypes$ = this.store.select(selectSupertypes);
  cards$ = this.store.select(selectCards);
  cardsLoading$ = this.store.select(selectCardsLoadingState);
  showChart = false;

  ngOnInit(): void {
    this.store.dispatch(loadTypes());
    this.store.dispatch(loadSubtypes());
    this.store.dispatch(loadSupertypes());
    this.store.dispatch(loadCards());
    this.subscriptions.add(
      combineLatest({
          types: this.types$,
          cards: this.cards$
        }).pipe(
          map(
            ({types, cards}) => {
              const similarPokemons = this.getSimilarPokemons(cards, types);
              return ({similarPokemons});
            }
          )
        ).subscribe(
          ({similarPokemons}) => {
            this.store.dispatch(setSimilarPokemons({data: similarPokemons}));
          }
        )
    );


  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  filterData({type, value}: {type: FilterType, value:string}) {
    this.selectedFilters = {
      ...this.selectedFilters,
      [type]: value.toLowerCase(),
    };
    //TODO handle types with more than one word to avoid errors
    this.store.dispatch(loadCardsWithFilters({filters: this.selectedFilters}));
  }

  getSimilarPokemons(cards: Card[], types: string[]) {
    const pokemonsOfSameType: any = {};
    types.map(
      (type: string) => {
        pokemonsOfSameType[type] = [];
      }
    );
    cards.forEach(
      (card) => {
        if(card.supertype === 'Pokémon' && card.types?.length) {
          card.types.forEach(
            (type) => {
              pokemonsOfSameType[type] = [...pokemonsOfSameType[type], {name: card.name, id: card.id}]
            }
          );
        }
      }
    );
    return pokemonsOfSameType;
  }

  loadMore(page: number) {
    this.store.dispatch(loadMore({filters: this.selectedFilters, page}));
  }

  onThemeSwitchChange() {
    this.themingService.toggleTheme();
  }

}
