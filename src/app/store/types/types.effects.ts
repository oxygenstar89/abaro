import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { loadSubtypes, loadSubtypesSuccess, loadSupertypes, loadSupertypesSuccess, loadTypes, loadTypesSuccess } from './types.actions';
import { PokedexDataService } from '../../services/pokedex-data.service';

@Injectable()
export class TypesEffects {
  loadTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTypes),
      switchMap(() =>
        this.pokedexDataService.getTypes().pipe(
          map(data => loadTypesSuccess({ payload: data })),
          //TODO error handling
          // catchError(error => of(loadDataFailure({ payload: error })))
        )
      )
    )
  );

  loadSubtypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSubtypes),
      switchMap(() =>
        this.pokedexDataService.getSubtypes().pipe(
          map(data => loadSubtypesSuccess({ payload: data })),
          //TODO error handling
          // catchError(error => of(loadDataFailure({ payload: error })))
        )
      )
    )
  );

  loadSupertypes$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loadSupertypes),
    switchMap(() =>
      this.pokedexDataService.getSupertypes().pipe(
        map(data => loadSupertypesSuccess({ payload: data })),
        //TODO error handling
        // catchError(error => of(loadDataFailure({ payload: error })))
      )
    )
  )
);

  constructor(
    private actions$: Actions,
    private pokedexDataService: PokedexDataService,
  ) {}
}
