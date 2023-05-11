import { Nivel } from "@/types/enums";
import { GameOver, Pokemon } from "@/types/types";
export interface WhoStateReducer {
  countPokemonsWho: Nivel;
  cacheWho: Pokemon[];
  pokemonsAsserts: string[];
  viewModal: boolean;
  inGame: boolean;
  gameOver: boolean;
  stopConfetti: boolean;
  restart: boolean;
  result: boolean;
  posCard: number;
  countAsserts: number;
  countRoundsAsserts: number;
  messageGameOver: string;
  countRecolateRounds: number;
  countsPointsPower: number;
  countAssertAllGame: number;
  bonify: boolean;
  granBonify: boolean;
}
export const INITIAL_STATE: WhoStateReducer = {
  messageGameOver: "",
  cacheWho: [],
  pokemonsAsserts: [],
  viewModal: true,
  inGame: false,
  gameOver: false,
  stopConfetti: false,
  restart: false,
  result: false,
  countPokemonsWho: Nivel.easy,
  countAsserts: 0,
  countRoundsAsserts: 0,
  posCard: 0,
  countRecolateRounds: 0,
  countsPointsPower: 0,
  countAssertAllGame: 0,
  bonify: false,
  granBonify: false,
};

type ActionWho =
  | { type: "who/cache"; payload: Pokemon[] }
  | { type: "who/init"; payload: boolean }
  | { type: "who/change-dificulty"; payload: Nivel }
  | { type: "who/stop-confetti" }
  | { type: "who/restart" }
  | { type: "who/gameover"; payload: GameOver }
  | { type: "who/change-card"; payload: number }
  | { type: "who/assert"; payload: string }
  | { type: "who/round" }
  | { type: "who/power"; payload: Pokemon }
  | { type: "who/reset-recolates-rounds" }
  | { type: "who/bonify" }
  | { type: "who/granbonify" };

export const reducerWho = (state: WhoStateReducer, action: ActionWho) => {
  switch (action.type) {
    case "who/cache": {
      return { ...state, cacheWho: [...state.cacheWho, ...action.payload] };
    }
    case "who/init": {
      return {
        ...state,
        viewModal: action.payload,
        inGame: true,
        restart: false,
      };
    }
    case "who/change-dificulty": {
      return {
        ...state,
        countPokemonsWho: action.payload,
      };
    }
    case "who/stop-confetti": {
      return {
        ...state,
        stopConfetti: true,
      };
    }
    case "who/restart": {
      return {
        ...INITIAL_STATE,
        gameOver: false,
        restart: true,
      };
    }
    case "who/gameover": {
      return {
        ...state,
        gameOver: true,
        viewModal: true,
        result: action.payload.results,
        messageGameOver: action.payload.message,
      };
    }
    case "who/change-card": {
      return {
        ...state,
        posCard: action.payload,
      };
    }
    case "who/assert": {
      return {
        ...state,
        pokemonsAsserts: [...state.pokemonsAsserts, action.payload],
        countAsserts: state.countAsserts + 1,
        countAssertAllGame: state.countAssertAllGame + 1,
        bonify: true,
      };
    }
    case "who/round": {
      return {
        ...state,
        countRoundsAsserts: state.countRoundsAsserts + 1,
        pokemonsAsserts: [],
        countRecolateRounds: state.countRecolateRounds + 1,
        granBonify: true,
      };
    }
    case "who/power": {
      return {
        ...state,
        pokemonsAsserts: [...state.pokemonsAsserts, action.payload.name],
        countAsserts: state.countAsserts + 1,
        countsPointsPower: state.countsPointsPower - 1,
        // countAssertAllGame:state.countAssertAllGame + 1, AGREGAR LINEA SI ES QUE UTILIZAR EL PODER CUENTA COMO ASSERT
      };
    }
    case "who/reset-recolates-rounds": {
      return {
        ...state,
        countRecolateRounds: 0,
        countsPointsPower: state.countsPointsPower + 1,
      };
    }
    case "who/bonify": {
      return {
        ...state,
        bonify: false,
      };
    }
    case "who/granbonify": {
      return { ...state, granBonify: false };
    }
    default:
      return state;
  }
};
