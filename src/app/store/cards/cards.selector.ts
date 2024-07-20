import { Card, SimilarPokemons, StoreCardsType } from "../../services/pokedex-data.model";

export const selectCards = (state: { cards: {cards: StoreCardsType, similarPokemons: SimilarPokemons}}) => state.cards.cards.data;

export const selectCardsLoadingState = (state: { cards: {cards: StoreCardsType, similarPokemons: SimilarPokemons}}) => state.cards.cards.loading;

export const selectSimilarPokemons = (state: { cards: {cards: Card[], similarPokemons: SimilarPokemons}}) => state.cards.similarPokemons;
