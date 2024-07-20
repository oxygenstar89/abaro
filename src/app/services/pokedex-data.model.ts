export type Types = {
  data: string[],
}

export type Cards = {
  data: Card[],
  page: number,
  pageSize: number,
  count: number,
  totalCount: number
}

export type Card = {
  id: string,
  name: string,
  supertype: string,
  subtypes?: string[],
  level: string,
  hp: string,
  types?: string[],
  evolvesFrom: string,
  evolvesTo?: string[],
  abilities: [
      {
          name: string,
          text: string,
          type: string,
      }
  ],
  attacks: [
      {
          name: string,
          cost: string[],
          convertedEnergyCost: number,
          damage: string,
          text: string,
      }
  ],
  weaknesses: [
      {
          type: string,
          value: string
      }
  ],
  resistances: [
      {
        type: string,
        value: string
      }
  ],
  retreatCost: string[],
  convertedRetreatCost: number,
  set: {
      id: string,
      name: string,
      series: string,
      printedTotal: number,
      total: number,
      legalities: {
          unlimited: string
      },
      ptcgoCode: string,
      releaseDate: string,
      updatedAt: string,
      images: {
          symbol: string,
          logo: string
      }
  },
  number: string,
  artist: string,
  rarity: string,
  nationalPokedexNumbers: number[],
  legalities: {
      unlimited: string
  },
  images: {
      small: string,
      large: string
  },
  tcgplayer: {
      url: string,
      updatedAt: string,
      prices: {
          [key: string]: {
            low: number,
            mid: number,
            high: number,
            market: number,
            directLow: null
          },
      }
  },
  cardmarket: {
      url: string,
      updatedAt: string,
      prices: {
          averageSellPrice: number,
          lowPrice: number,
          trendPrice: number,
          germanProLow: number,
          suggestedPrice: number,
          reverseHoloSell: number,
          reverseHoloLow: number,
          reverseHoloTrend: number,
          lowPriceExPlus: number,
          avg1: number,
          avg7: number,
          avg30: number,
          reverseHoloAvg1: number,
          reverseHoloAvg7: number,
          reverseHoloAvg30: number
      }
  }
}

export type SelectedFilters = {
  type: string,
  supertype: string,
  subtype: string,
}

export type FilterType = 'supertype' | 'subtype' | 'type';

export type FilterTypePlural = 'supertypes' | 'subtypes' | 'types';

export type SimilarPokemons = {
  [key: string]: SimilarPokemon[];
}

export type SimilarPokemon = {
  name: string;
  id: string;
}

export type TypesStateType = {
  [key: string]: StoreType;
}

export type StoreType = {
  loading: boolean,
  errors: any,
  data: []
}

export type StoreCardsType = {
  loading: boolean,
  errors: any,
  data: Card[]
}
