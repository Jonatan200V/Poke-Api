import { Pokemon } from "@/types/types";
import { useEffect, useState } from "react";
import { shuffle } from "./useMixCards";

interface CachePokemons {
  [key: number]: boolean;
}
const randomsPokemons = (
  cachePokemons: CachePokemons,
  pokemon: Pokemon[],
  laps: number,
) => {
  const pokemons: Pokemon[] = [];
  while (laps > pokemons.length) {
    const randomPokemon = Math.floor(Math.random() * pokemon.length);
    if (!cachePokemons[randomPokemon]) {
      cachePokemons[randomPokemon] = true;
      pokemons.push(pokemon[randomPokemon]);
    }
  }
  return pokemons;
};
export default function useWhoPokemon(
  pokemon: Pokemon[],
  cachePokemons: Pokemon[],
  laps: number,
  rounds: number,
) {
  const [poke, setPoke] = useState<Pokemon[]>([]);
  const [pokeOptions, setPokeOptions] = useState<Pokemon[]>([]);
  useEffect(() => {
    const cachePokemons: CachePokemons = {};
    const pokemonsWho = randomsPokemons(cachePokemons, pokemon, laps);
    const pokemonsWhoOptions = randomsPokemons(
      cachePokemons,
      pokemon,
      laps * 3,
    );
    setPoke(pokemonsWho);
    const pokemons = shuffle<Pokemon>([...pokemonsWho, ...pokemonsWhoOptions]);
    setPokeOptions(pokemons);
  }, [cachePokemons, laps, rounds]);

  return { poke, pokeOptions };
}
