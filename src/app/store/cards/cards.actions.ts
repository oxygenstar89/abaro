import { createAction, props } from "@ngrx/store";
import { FilterTypePlural, SelectedFilters, SimilarPokemons } from "../../services/pokedex-data.model";

export const setSimilarPokemons = createAction(
  '[Cards] SetSimilarPokemons',
  props<
    {
      data: SimilarPokemons
    }
  >()
);

export const updateCardAttack = createAction(
  '[Cards] UpdateCardAttack',
  props<
    {
      data: {
        cardIndex: number,
        attackIndex: number,
        newValue: string,
        dataToEdit: 'damage' | 'name',
      }
    }
  >()
);

export const updateCardTypes = createAction(
  '[Cards] UpdateCardTypes',
  props<
    {
      data: {
        cardIndex: number,
        typeIndex: number,
        typeOfype: FilterTypePlural,
        newValue: string,
      }
    }
  >()
);

export const updateCardSupertype = createAction(
  '[Cards] UpdateCardSupertype',
  props<
    {
      data: {
        cardIndex: number,
        newValue: string,
      }
    }
  >()
);

export const loadCardsWithFilters = createAction(
  '[Cards] LoadCardsWithFilters',
  props<
    {
      filters: SelectedFilters,
    }
  >()
);

export const loadCardsWithFiltersSuccess = createAction(
  '[Cards] LoadCardsWithFiltersSuccess',
  props<
    {
      payload: any,
    }
  >()
);

export const loadCards = createAction(
  '[Cards] LoadCards'
);

export const loadCardsSuccess = createAction(
  '[Cards] LoadCardsSuccess',
  props<
    {
      payload: any,
    }
  >()
);

export const loadCardsFailure = createAction(
  '[Cards] LoadCardsFailure',
  props<
    {
      payload: any
    }
  >()
);

export const loadMore = createAction(
  '[Cards] LoadMore',
  props<
    {
      filters: SelectedFilters,
      page: number,
    }
  >()
);

export const loadMoreSuccess = createAction(
  '[Cards] LoadMoreSuccess',
  props<
    {
      payload: any,
    }
  >()
);
