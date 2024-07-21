import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadCards, loadCardsFailure, loadCardsSuccess, loadCardsWithFilters, loadCardsWithFiltersSuccess, loadMore, loadMoreSuccess } from './cards.actions';
import { switchMap, catchError, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokedexDataService } from '../../services/pokedex-data.service';

@Injectable()
export class CardsEffects {

  loadCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCards),
      switchMap(() =>
        this.pokedexDataService.getCards().pipe(
          map(data => loadCardsSuccess({ payload: data })),
          catchError(error => of(loadCardsFailure({ payload: error })))
        )
      )
    )
  );

  loadCardsWithFilters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCardsWithFilters),
      switchMap(({filters, type}: any) =>
        this.pokedexDataService.getCards(filters).pipe(
          map(data => loadCardsWithFiltersSuccess({ payload: data })),
          catchError(error => of(loadCardsFailure({ payload: error })))
        )
      )
    )
  );

  loadMore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMore),
      switchMap(({filters, page, type}: any) =>
          this.pokedexDataService.getCards(filters, page).pipe(
            map(data => loadMoreSuccess({ payload: data })),
            // catchError(error => of(loadCardsFailure({ payload: error })))
          )
      )
    )
  );

  constructor(private actions$: Actions, private pokedexDataService: PokedexDataService) {}
}
