export const STORE_MOCK_TYPES = [
  "Colorless",
  "Darkness",
  "Dragon",
  "Fairy",
  "Fighting",
  "Fire",
  "Grass",
  "Lightning",
  "Metal",
  "Psychic",
  "Water"
];

export const STORE_MOCK_SUBTYPES = [
  "ACE SPEC",
  "Ancient",
  "BREAK",
  "Baby",
  "Basic",
  "EX",
  "Eternamax",
  "Fusion Strike",
  "Future",
  "GX",
  "Goldenrod Game Corner",
  "Item",
  "LEGEND",
  "Level-Up",
  "MEGA",
  "Pokémon Tool",
  "Pokémon Tool F",
  "Prime",
  "Prism Star",
  "Radiant",
  "Rapid Strike",
  "Restored",
  "Rocket's Secret Machine",
  "SP",
  "Single Strike",
  "Special",
  "Stadium",
  "Stage 1",
  "Stage 2",
  "Star",
  "Supporter",
  "TAG TEAM",
  "Team Plasma",
  "Technical Machine",
  "Tera",
  "Ultra Beast",
  "V",
  "V-UNION",
  "VMAX",
  "VSTAR",
  "ex"
];

export const STORE_MOCK_SUPERTYPES = [
  "Energy",
  "Pokémon",
  "Trainer"
];

export const STORE_MOCK_CARDS = [
  {
    "id": "hgss4-1",
    "name": "Aggron",
    "supertype": "Pokémon",
    "subtypes": [
      "Stage 2"
    ],
    "hp": "140",
    "types": [
      "Metal"
    ],
    "evolvesFrom": "Lairon",
    "attacks": [
      {
        "name": "Second Strike",
        "cost": [
          "Metal",
          "Metal",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "40",
        "text": "If the Defending Pokémon already has any damage counters on it, this attack does 40 damage plus 40 more damage."
      },
      {
        "name": "Guard Claw",
        "cost": [
          "Metal",
          "Metal",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 4,
        "damage": "60",
        "text": "During your opponent's next turn, any damage done to Aggron by attacks is reduced by 20 (after applying Weakness and Resistance)."
      }
    ],
    "weaknesses": [
      {
        "type": "Fire",
        "value": "×2"
      }
    ],
    "resistances": [
      {
        "type": "Psychic",
        "value": "-20"
      }
    ],
    "retreatCost": [
      "Colorless",
      "Colorless",
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 4,
    "set": {
      "id": "hgss4",
      "name": "HS—Triumphant",
      "series": "HeartGold & SoulSilver",
      "printedTotal": 102,
      "total": 103,
      "legalities": {
        "unlimited": "Legal"
      },
      "ptcgoCode": "TM",
      "releaseDate": "2010/11/03",
      "updatedAt": "2018/03/04 10:35:00",
      "images": {
        "symbol": "https://images.pokemontcg.io/hgss4/symbol.png",
        "logo": "https://images.pokemontcg.io/hgss4/logo.png"
      }
    },
    "number": "1",
    "artist": "Kagemaru Himeno",
    "rarity": "Rare Holo",
    "flavorText": "You can tell its age by the length of its iron horns. It claims an entire mountain as its territory.",
    "nationalPokedexNumbers": [
      306
    ],
    "legalities": {
      "unlimited": "Legal"
    },
    "images": {
      "small": "https://images.pokemontcg.io/hgss4/1.png",
      "large": "https://images.pokemontcg.io/hgss4/1_hires.png"
    },
    "tcgplayer": {
      "url": "https://prices.pokemontcg.io/tcgplayer/hgss4-1",
      "updatedAt": "2024/07/20",
      "prices": {
        "holofoil": {
          "low": 1.69,
          "mid": 2.99,
          "high": 3.95,
          "market": 3,
          "directLow": null
        },
        "reverseHolofoil": {
          "low": 1.99,
          "mid": 2.4,
          "high": 4.8,
          "market": 2.4,
          "directLow": 2.75
        }
      }
    },
    "cardmarket": {
      "url": "https://prices.pokemontcg.io/cardmarket/hgss4-1",
      "updatedAt": "2024/07/20",
      "prices": {
        "averageSellPrice": 1.33,
        "lowPrice": 0.3,
        "trendPrice": 1.63,
        "germanProLow": 0,
        "suggestedPrice": 0,
        "reverseHoloSell": 3.83,
        "reverseHoloLow": 0.8,
        "reverseHoloTrend": 2.81,
        "lowPriceExPlus": 1.3,
        "avg1": 1.19,
        "avg7": 1.87,
        "avg30": 3.72,
        "reverseHoloAvg1": 2.8,
        "reverseHoloAvg7": 3.1,
        "reverseHoloAvg30": 2.91
      }
    }
  },
  {
    "id": "xy5-1",
    "name": "Weedle",
    "supertype": "Pokémon",
    "subtypes": [
      "Basic"
    ],
    "hp": "50",
    "types": [
      "Grass"
    ],
    "evolvesTo": [
      "Kakuna"
    ],
    "attacks": [
      {
        "name": "Multiply",
        "cost": [
          "Grass"
        ],
        "convertedEnergyCost": 1,
        "damage": "",
        "text": "Search your deck for Weedle and put it onto your Bench. Shuffle your deck afterward."
      }
    ],
    "weaknesses": [
      {
        "type": "Fire",
        "value": "×2"
      }
    ],
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "set": {
      "id": "xy5",
      "name": "Primal Clash",
      "series": "XY",
      "printedTotal": 160,
      "total": 164,
      "legalities": {
        "unlimited": "Legal",
        "expanded": "Legal"
      },
      "ptcgoCode": "PRC",
      "releaseDate": "2015/02/04",
      "updatedAt": "2020/05/01 16:06:00",
      "images": {
        "symbol": "https://images.pokemontcg.io/xy5/symbol.png",
        "logo": "https://images.pokemontcg.io/xy5/logo.png"
      }
    },
    "number": "1",
    "artist": "Midori Harada",
    "rarity": "Common",
    "flavorText": "Its poison stinger is very powerful. Its bright-colored body is intended to warn off its enemies.",
    "nationalPokedexNumbers": [
      13
    ],
    "legalities": {
      "unlimited": "Legal",
      "expanded": "Legal"
    },
    "images": {
      "small": "https://images.pokemontcg.io/xy5/1.png",
      "large": "https://images.pokemontcg.io/xy5/1_hires.png"
    },
    "tcgplayer": {
      "url": "https://prices.pokemontcg.io/tcgplayer/xy5-1",
      "updatedAt": "2024/07/20",
      "prices": {
        "normal": {
          "low": 0.01,
          "mid": 0.15,
          "high": 2,
          "market": 0.12,
          "directLow": 0.07
        },
        "reverseHolofoil": {
          "low": 0.23,
          "mid": 0.46,
          "high": 20.36,
          "market": 0.61,
          "directLow": 1
        }
      }
    },
    "cardmarket": {
      "url": "https://prices.pokemontcg.io/cardmarket/xy5-1",
      "updatedAt": "2024/07/20",
      "prices": {
        "averageSellPrice": 0.11,
        "lowPrice": 0.02,
        "trendPrice": 0.1,
        "germanProLow": 0,
        "suggestedPrice": 0,
        "reverseHoloSell": 0.25,
        "reverseHoloLow": 0.12,
        "reverseHoloTrend": 0.72,
        "lowPriceExPlus": 0.02,
        "avg1": 0.12,
        "avg7": 0.1,
        "avg30": 0.08,
        "reverseHoloAvg1": 0.99,
        "reverseHoloAvg7": 0.54,
        "reverseHoloAvg30": 0.48
      }
    }
  },
  {
    "id": "pl1-1",
    "name": "Ampharos",
    "supertype": "Pokémon",
    "subtypes": [
      "Stage 2"
    ],
    "level": "57",
    "hp": "130",
    "types": [
      "Lightning"
    ],
    "evolvesFrom": "Flaaffy",
    "abilities": [
      {
        "name": "Damage Bind",
        "text": "Each Pokémon that has any damage counters on it (both yours and your opponent's) can't use any Poké-Powers.",
        "type": "Poké-Body"
      }
    ],
    "attacks": [
      {
        "name": "Gigavolt",
        "cost": [
          "Lightning",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "30+",
        "text": "Flip a coin. If heads, this attack does 30 damage plus 30 more damage. If tails, the Defending Pokémon is now Paralyzed."
      },
      {
        "name": "Reflect Energy",
        "cost": [
          "Lightning",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "70",
        "text": "Move an Energy card attached to Ampharos to 1 of your Benched Pokémon."
      }
    ],
    "weaknesses": [
      {
        "type": "Fighting",
        "value": "+30"
      }
    ],
    "resistances": [
      {
        "type": "Metal",
        "value": "-20"
      }
    ],
    "retreatCost": [
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 2,
    "set": {
      "id": "pl1",
      "name": "Platinum",
      "series": "Platinum",
      "printedTotal": 127,
      "total": 133,
      "legalities": {
        "unlimited": "Legal"
      },
      "ptcgoCode": "PL",
      "releaseDate": "2009/02/11",
      "updatedAt": "2020/08/14 09:35:00",
      "images": {
        "symbol": "https://images.pokemontcg.io/pl1/symbol.png",
        "logo": "https://images.pokemontcg.io/pl1/logo.png"
      }
    },
    "number": "1",
    "artist": "Atsuko Nishida",
    "rarity": "Rare Holo",
    "nationalPokedexNumbers": [
      181
    ],
    "legalities": {
      "unlimited": "Legal"
    },
    "images": {
      "small": "https://images.pokemontcg.io/pl1/1.png",
      "large": "https://images.pokemontcg.io/pl1/1_hires.png"
    },
    "tcgplayer": {
      "url": "https://prices.pokemontcg.io/tcgplayer/pl1-1",
      "updatedAt": "2024/07/20",
      "prices": {
        "holofoil": {
          "low": 4,
          "mid": 5.4,
          "high": 16.23,
          "market": 12.98,
          "directLow": null
        },
        "reverseHolofoil": {
          "low": 4,
          "mid": 5.46,
          "high": 8.39,
          "market": 6.41,
          "directLow": null
        }
      }
    },
    "cardmarket": {
      "url": "https://prices.pokemontcg.io/cardmarket/pl1-1",
      "updatedAt": "2024/07/20",
      "prices": {
        "averageSellPrice": 2.87,
        "lowPrice": 0.6,
        "trendPrice": 3.99,
        "germanProLow": 0,
        "suggestedPrice": 0,
        "reverseHoloSell": 0,
        "reverseHoloLow": 1,
        "reverseHoloTrend": 2.13,
        "lowPriceExPlus": 1.5,
        "avg1": 1.5,
        "avg7": 4.2,
        "avg30": 3.48,
        "reverseHoloAvg1": 1,
        "reverseHoloAvg7": 1.74,
        "reverseHoloAvg30": 3.09
      }
    }
  }
];

export const STORE_MOCK_SIMILAR_POKEMONS = {
  Colorless: [
    {
      "name": "Aerodactyl",
      "id": "ex12-1"
    },
    {
      "name": "Altaria",
      "id": "hgss4-2"
    },
    {
      "name": "Altaria",
      "id": "ex3-2"
    },
    {
      "name": "Clefable",
      "id": "col1-1"
    },
    {
      "name": "Chansey",
      "id": "base4-3"
    },
    {
      "name": "Pidgeot",
      "id": "si1-2"
    },
    {
      "name": "Ditto",
      "id": "base3-3"
    },
    {
      "name": "Clefable",
      "id": "hgss1-3"
    },
    {
      "name": "Erika's Clefable",
      "id": "gym1-3"
    }
  ],
  Darkness: [
    {
      "name": "Absol G",
      "id": "pl3-1"
    },
    {
      "name": "Absol",
      "id": "ex3-1"
    },
    {
      "name": "Dark Ampharos",
      "id": "ex7-2"
    }
  ],
  Dragon: [
    {
      "name": "Dratini",
      "id": "dv1-1"
    },
    {
      "name": "Dratini",
      "id": "dv1-2"
    }
  ],
  Fighting: [
    {
      "name": "Aerodactyl",
      "id": "base3-1"
    },
    {
      "name": "Lucario",
      "id": "pop6-2"
    },
    {
      "name": "Brock's Rhydon",
      "id": "gym1-2"
    },
    {
      "name": "Armaldo δ",
      "id": "ex13-1"
    }
  ],
  Fire: [
    {
      "name": "Arcanine",
      "id": "hgss1-1"
    },
    {
      "name": "Blaine's Moltres",
      "id": "gym1-1"
    },
    {
      "name": "Arcanine",
      "id": "ecard2-H2"
    },
    {
      "name": "Blaziken FB",
      "id": "pl3-2"
    }
  ],
  Grass: [
    {
      "name": "Weedle",
      "id": "xy5-1"
    },
    {
      "name": "Bulbasaur",
      "id": "det1-1"
    },
    {
      "name": "Caterpie",
      "id": "mcd19-1"
    },
    {
      "name": "Venusaur",
      "id": "ru1-1"
    }
  ],
  Lightning: [
    {
      "name": "Ampharos",
      "id": "pl1-1"
    },
    {
      "name": "Ampharos",
      "id": "dp3-1"
    },
    {
      "name": "Ampharos",
      "id": "ecard2-H1"
    },
    {
      "name": "Dark Ampharos",
      "id": "ex7-2"
    }
  ],
  Metal: [
    {
      "name": "Aggron",
      "id": "hgss4-1"
    },
    {
      "name": "Beedrill δ",
      "id": "ex11-1"
    },
    {
      "name": "Bastiodon",
      "id": "pop6-1"
    },
    {
      "name": "Crobat δ",
      "id": "ex11-2"
    }
  ],
  Psychic: [
    {
      "name": "Alakazam",
      "id": "base4-1"
    },
    {
      "name": "Banette",
      "id": "ex14-1"
    },
    {
      "name": "Mew",
      "id": "si1-1"
    },
    {
      "name": "Deoxys",
      "id": "ex9-2"
    }
  ],
  Water: [
    {
      "name": "Azumarill",
      "id": "ex7-1"
    },
    {
      "name": "Blastoise",
      "id": "pl1-2"
    },
    {
      "name": "Blastoise",
      "id": "dp3-2"
    }
  ],
}


export const MOCK_STORE = {
  initialState: {
    cards: {
      cards: {
        loading: false,
        errors: null,
        data: STORE_MOCK_CARDS
      },
      similarPokemons: STORE_MOCK_SIMILAR_POKEMONS
    },
    types: {
      types: {
        loading: false,
        errors: null,
        data: STORE_MOCK_TYPES,
      },
      subtypes:  {
        loading: false,
        errors: null,
        data: STORE_MOCK_SUBTYPES,
      },
      supertypes:  {
        loading: false,
        errors: null,
        data: STORE_MOCK_SUPERTYPES
      },
    }
  },
}
