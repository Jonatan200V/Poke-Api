import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { PokeState } from "../store";
import { Pokemon } from "@/types/types";

interface StatePokemon {
  pokemons: Pokemon[];
  count: number;
}

const INITIAL_STATE: StatePokemon = {
  pokemons: [],
  count: 0,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: INITIAL_STATE,
  reducers: {
    getPokemonsStore: (state, action: PayloadAction<Pokemon[]>) => {
      state.pokemons = action.payload;
    },
  },
});

export const STATE = (state: PokeState) => state;
export const { getPokemonsStore } = pokemonSlice.actions;
export default pokemonSlice.reducer;
