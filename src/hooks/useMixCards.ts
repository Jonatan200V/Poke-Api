import { useAppSelector } from "@/store/hooks";
import { Pokemon } from "@/types/types";
import { useEffect, useState } from "react";

type Cache = {
  [key: string | number]: string | number;
};
export const shuffle = <T>(pokemons: T[]): T[] => {
  for (let i = pokemons.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pokemons[i], pokemons[j]] = [pokemons[j], pokemons[i]];
  }
  return pokemons;
};
export default function useMixCards(
  countPokemons: number = 8,
  restart: boolean,
) {
  const { pokemon } = useAppSelector(state => state);
  const [poke, setPoke] = useState<Pokemon[]>([]);
  const cache: Cache = {};
  const pokemons: Pokemon[] = [];
  useEffect(() => {
    const pokemonRandoms = () => {
      while (countPokemons > pokemons.length) {
        const numberRandom = Math.floor(
          Math.random() * pokemon.pokemons.length,
        );
        const poke = pokemon.pokemons[numberRandom];
        if (!cache[numberRandom]) {
          pokemons.push(poke);
        }
        cache[numberRandom] = numberRandom;
      }
    };
    pokemonRandoms();
    const pokeShufle = [...pokemons, ...pokemons];
    // const shuffle = <T>(pokemons: T[]): T[] => {
    //   for (let i = pokemons.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [pokemons[i], pokemons[j]] = [pokemons[j], pokemons[i]];
    //   }
    //   return pokemons;
    // };

    setPoke(shuffle<Pokemon>(pokeShufle));
  }, [countPokemons, restart]);

  return {
    poke,
  };
}
