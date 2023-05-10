import { GameOver, Pokemon } from "@/types/types";

export interface PokemonIndex {
  name: string;
  index: number;
}

export interface StateReducer {
  messageGameOver: string;
  countCards: number;
  dimensionsCard: number;
  countClicks: number;
  countPowerTwoCards: number;
  countFlipPowerTouch: number;
  cachePokemons: number[];
  asserts: number[];
  flipPower: number[];
  viewModal: boolean;
  bonify: boolean;
  inGame: boolean;
  restart: boolean;
  gameOver: boolean;
  result: boolean;
  stopConfetti: boolean;
  cardOne: Pokemon | null;
  cardTwo: Pokemon | null;
  prevHit: number | null;
}

interface MemoryCard {
  pokemon: Pokemon;
  index: number;
}

export type ActionsMemory =
  | {
      type: "memory/changeDificulty";
      payload: number;
    }
  | {
      type: "memory/options";
      payload: boolean;
    }
  | { type: "memory/compare" }
  | { type: "memory/cardgame"; payload: MemoryCard }
  | { type: "memory/bonify" }
  | { type: "memory/restart" }
  | { type: "memory/game-over"; payload: GameOver }
  // | { type: "memory/change-restart" }
  | { type: "memory/flip-power" }
  | { type: "memory/flip-off-power" }
  | { type: "memory/add-cards-power"; payload: PokemonIndex[] }
  | { type: "memory/confetti" };
const generateDimensions = (divisor: number, countCards: number) => {
  const area = divisor * divisor;
  const dobleCards = countCards * 2;
  const areaImage = area / dobleCards;
  const areaResult = Math.pow(areaImage, 0.5);
  return areaResult;
};
const getNumbersUpTo = (num: number): number[] => {
  if (num === 0) {
    return [];
  } else {
    return [...getNumbersUpTo(num - 1), num - 1];
  }
};
const searchPokemonRandom = (pokemons: PokemonIndex[]) => {
  const randomPokemon = Math.floor(Math.random() * pokemons.length);
  const idsCard: number[] = [];

  pokemons.forEach(pokemon => {
    if (pokemons[randomPokemon].name === pokemon.name) {
      idsCard.push(pokemon.index);
    }
  });
  if (idsCard.length === 2) {
    return idsCard;
  }

  return undefined;
};

export const INITIAL_STATE: StateReducer = {
  messageGameOver: "",
  countCards: 8,
  dimensionsCard: generateDimensions(800, 8),
  countClicks: 0,
  countPowerTwoCards: 0,
  countFlipPowerTouch: 1,
  cachePokemons: [],
  asserts: [],
  flipPower: [],
  viewModal: true,
  bonify: false,
  inGame: false,
  restart: false, //no importa que valor tenga solo lo utilizo para resetear
  gameOver: false,
  result: false,
  stopConfetti: false,
  cardOne: null,
  cardTwo: null,
  prevHit: null,
};
export const reducerMemory = (state: StateReducer, action: ActionsMemory) => {
  switch (action.type) {
    case "memory/options": {
      return {
        ...state,
        viewModal: action.payload,
        inGame: true,
        restart: false,
      };
    }
    case "memory/changeDificulty": {
      state = {
        ...state,
        countCards: action.payload,
      };
      if (action.payload === 8) {
        const dimensionsCard = generateDimensions(800, action.payload);
        state = { ...state, dimensionsCard: dimensionsCard };
      }
      if (action.payload === 16) {
        const dimensionsCard = generateDimensions(800, action.payload);
        state = { ...state, dimensionsCard: dimensionsCard - 9 };
      }
      if (action.payload === 32) {
        const dimensionsCard = generateDimensions(800, action.payload);
        state = { ...state, dimensionsCard: dimensionsCard };
      }

      return state;
    }
    case "memory/cardgame": {
      if (state.cachePokemons[0] === action.payload.index) {
        return state;
      }
      if (state.cardOne) {
        return {
          ...state,
          cardTwo: action.payload.pokemon,
          cachePokemons: [...state.cachePokemons, action.payload.index],
          countClicks: state.countClicks + 1,
        };
      }
      return {
        ...state,
        cardOne: action.payload.pokemon,
        prevHit: Date.now(),
        cachePokemons: [...state.cachePokemons, action.payload.index],
        countClicks: state.countClicks + 1,
      };
    }
    case "memory/compare": {
      const numbersCache = [...state.cachePokemons];
      if (state.cardOne?.name === state.cardTwo?.name) {
        state = {
          ...state,
          asserts: [...state.asserts, ...numbersCache],
          cachePokemons: [],
          cardOne: null,
          cardTwo: null,
        };
        if (state.prevHit) {
          if (Date.now() - state.prevHit < 5000) {
            return {
              ...state,
              bonify: true,
              countPowerTwoCards: state.countPowerTwoCards + 1,
            };
          }
        }
        return state;
      }
      return {
        ...state,
        cardOne: null,
        cardTwo: null,
        cachePokemons: [],
      };
    }
    case "memory/bonify": {
      return {
        ...state,
        bonify: false,
        prevHit: null,
      };
    }
    case "memory/restart": {
      state = INITIAL_STATE;
      return {
        ...state,
        gameOver: false,
        restart: true,
      };
    }
    case "memory/game-over": {
      return {
        ...state,
        gameOver: true,
        viewModal: true,
        messageGameOver: action.payload.message,
        result: action.payload.results,
      };
    }
    // case "memory/change-restart": {
    //   return {
    //     ...state,
    //     restart: false,
    //   };
    // }
    case "memory/flip-power": {
      return {
        ...state,
        flipPower: getNumbersUpTo(state.countCards * 2),
        countFlipPowerTouch: state.countFlipPowerTouch - 1,
      };
    }
    case "memory/flip-off-power": {
      return {
        ...state,
        flipPower: [],
      };
    }
    case "memory/add-cards-power": {
      const allIndex = [...state.asserts, ...state.cachePokemons];

      const resultsPokemonsDontFlip = action.payload.filter(
        ({ index }) => !allIndex.includes(index),
      );

      let results = searchPokemonRandom(resultsPokemonsDontFlip);
      while (results === undefined) {
        results = searchPokemonRandom(resultsPokemonsDontFlip);
      }
      return {
        ...state,
        asserts: [...state.asserts, ...results],
        countPowerTwoCards: state.countPowerTwoCards - 3,
      };
    }
    case "memory/confetti": {
      return {
        ...state,
        stopConfetti: true,
      };
    }
    default:
      return state;
  }
};
