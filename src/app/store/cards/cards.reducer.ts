import { createReducer, on } from "@ngrx/store";
import { loadCards, loadCardsFailure, loadCardsSuccess, loadCardsWithFilters, loadCardsWithFiltersSuccess, loadMore, loadMoreSuccess, setSimilarPokemons, updateCardAttack, updateCardSupertype, updateCardTypes } from "./cards.actions";
import { Card, SimilarPokemons, StoreCardsType } from "../../services/pokedex-data.model";

const initialState: {cards: StoreCardsType, similarPokemons: SimilarPokemons} = {
  cards: {
    loading: false,
    errors: null,
    data: []
  },
  similarPokemons: {},
}

export const cardsReducer = createReducer(
  initialState,

  on(
    setSimilarPokemons,
    (state, action) => ({
      ...state,
      similarPokemons: action.data,
    })
  ),

  on(
    updateCardAttack,
    (state, {data: {cardIndex, attackIndex, dataToEdit, newValue}}) => {
      let cards = JSON.parse(JSON.stringify(state.cards));
      cards.data[cardIndex].attacks[attackIndex][dataToEdit] = newValue;
      return {
        ...state,
        cards
      }
    }
  ),

  on(
    updateCardTypes,
    (state, {data: {cardIndex, typeIndex, typeOfype, newValue}}) => {
      let cards = JSON.parse(JSON.stringify(state.cards));
      cards.data[cardIndex][typeOfype][typeIndex] = newValue;
      return {
        ...state,
        cards
      }
    }
  ),

  on(
    updateCardSupertype,
    (state, {data: {cardIndex, newValue}}) => {
      let cards = JSON.parse(JSON.stringify(state.cards));
      cards.data[cardIndex].supertype = newValue;
      return {
        ...state,
        cards
      }
    }
  ),

  on(loadCards, state => {
    return {
      ...state,
      cards: {
        ...state.cards,
        data: [],
        loading: true,
      }
    };
  }),
  on(loadCardsSuccess, (state, { payload }) => {
    return {
      ...state,
      cards: {
        ...state.cards,
        loading: false,
        data: payload
      }
    };
  }),

  on(loadCardsFailure, (state, { payload }) => {
    return {
      ...state,
      cards: {
        ...state.cards,
        loading: false,
        error: payload
      }
    };
  }),

  on(loadCardsWithFilters, state => {
    return {
      ...state,
      cards: {
        ...state.cards,
        data: [],
        loading: true,
      }
    };
  }),

  on(loadCardsWithFiltersSuccess, (state, { payload }) => {
    return {
      ...state,
      cards: {
        ...state.cards,
        loading: false,
        data: payload
      }
    };
  }),

  on(loadMore, state => {
    return {
      ...state,
      cards: {
        ...state.cards,
        loading: false,
      }
    };
  }),

  on(loadMoreSuccess, (state, { payload }) => {
    return {
      ...state,
      cards: {
        ...state.cards,
        loading: false,
        data: [...state.cards.data, ...payload]
      }
    };
  }),
);
