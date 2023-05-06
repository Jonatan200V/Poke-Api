import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { PokeState } from "../store";
import { Pokemon } from "@/types/types";

interface StatePokemon {
  pokemons: Pokemon[];
  pokemon: Pokemon | null;
  index: number | null;
}

const INITIAL_STATE: StatePokemon = {
  pokemons: [],
  pokemon: null,
  index: null,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: INITIAL_STATE,
  reducers: {
    getPokemonsStore: (state, action: PayloadAction<Pokemon[]>) => {
      state.pokemons = action.payload;
    },
    changePokemonPokedex: (state, action: PayloadAction<Pokemon>) => {
      state.pokemon = action.payload;
    },
    addPokemon: (state, action: PayloadAction<Pokemon>) => {
      state.pokemon = action.payload;
    },
  },
});

export const STATE = (state: PokeState) => state;
export const { getPokemonsStore, changePokemonPokedex, addPokemon } =
  pokemonSlice.actions;
export default pokemonSlice.reducer;
