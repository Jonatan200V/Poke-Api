import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { PokeState } from "../store";
import { DamageRelations, Pokemon } from "@/types/types";
import { personajes } from "@/utils/images-cloudinary";

export interface Entrenadores {
  image: string;
  pokemons: Pokemon[];
}
export interface CreatePokemonsEntrenadores {
  nivel: number;
  damagePokemon: DamageRelations;
}
interface StatePokemon {
  pokemons: Pokemon[]; // Los pokemons de la pokedex
  initPokemonClassic: Pokemon[]; //Los pokemons para selecionar en el game adventure
  pokemon: Pokemon | null;
  // index: number | null;
  winGames: number;
  nivel: number;
  pokemonsPlay: Pokemon[];
  entrenadores: Entrenadores[];
}

const INITIAL_STATE: StatePokemon = {
  pokemons: [],
  initPokemonClassic: [],
  pokemonsPlay: [],
  pokemon: null,
  entrenadores: [],
  nivel: 1,
  winGames: 0,
  // index: null,
};
function craeteRandomPokemonForEntrenador(
  pokemon: Pokemon[],
  image: string,
  countPokemons: number,
) {
  const randomPoke = Math.floor(Math.random() * pokemon.length);
  const pokemons: Pokemon[] = [];
  while (pokemons.length < countPokemons) {
    pokemons.push(pokemon[randomPoke]);
  }
  const newEntrenador: Entrenadores = {
    image,
    pokemons,
  };
  return newEntrenador;
}
const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: INITIAL_STATE,
  reducers: {
    getPokemonsStore: (state, action: PayloadAction<Pokemon[]>) => {
      state.pokemons = action.payload;
    },
    // changePokemonPokedex: (state, action: PayloadAction<Pokemon>) => {
    //   state.pokemon = action.payload;
    // },
    addPokemon: (state, action: PayloadAction<Pokemon>) => {
      state.pokemon = action.payload;
    },
    createPokemonClassic: state => {
      const namePokemonsInit: string[] = ["bulbasaur", "charmander", "pikachu"];
      const pokemonsInit = state.pokemons.filter(({ name }) =>
        namePokemonsInit.includes(name),
      );
      state.initPokemonClassic = pokemonsInit;
    },
    getPokemon: (state, action: PayloadAction<Pokemon[]>) => {
      state.pokemonsPlay = action.payload;
    },
    createPokemonsEntrenadoresInit: (
      state,
      action: PayloadAction<CreatePokemonsEntrenadores>,
    ) => {
      const entrenadores: Entrenadores[] = [];
      personajes.forEach(image => {
        if (action.payload.nivel <= 3) {
          const namesPokemonsDebiles =
            action.payload.damagePokemon.double_damage_to.map(
              ({ name }) => name,
            );

          const poke = state.pokemons.find(poke => {
            if (
              namesPokemonsDebiles.includes(poke.types[0].type.name) ||
              namesPokemonsDebiles.includes(poke.types[1].type.name)
            ) {
              return poke;
            }
          });
          if (poke) {
            const newEntrenador: Entrenadores = {
              image,
              pokemons: [poke],
            };
            entrenadores.push(newEntrenador);
          }
        }
        if (action.payload.nivel > 3 && action.payload.nivel < 7) {
          const newEntrenador = craeteRandomPokemonForEntrenador(
            state.pokemons,
            image,
            2,
          );
          entrenadores.push(newEntrenador);
        }
        if (action.payload.nivel > 7) {
          const newEntrenador = craeteRandomPokemonForEntrenador(
            state.pokemons,
            image,
            3,
          );
          entrenadores.push(newEntrenador);
        }
      });
      state.entrenadores = entrenadores;
    },
  },
});

export const STATE = (state: PokeState) => state;
export const {
  getPokemonsStore,
  // changePokemonPokedex,
  addPokemon,
  createPokemonClassic,
  getPokemon,
  createPokemonsEntrenadoresInit,
} = pokemonSlice.actions;
export default pokemonSlice.reducer;
