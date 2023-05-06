import { configureStore, combineReducers } from "@reduxjs/toolkit";
import pokemonReducer from "./reducer/pokemon";
import errorReducer from "./reducer/error";
import userReducer from "./reducer/user";
const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  error: errorReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type PokeState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
