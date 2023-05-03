"use client";
import usePokemon from "@/hooks/usePokemon";
import { useAppSelector } from "@/store/hooks";
import { STATE } from "@/store/reducer/pokemon";
import React from "react";
import Loading from "../Loading/Loading";
import CardPokemon from "../CardPokemon/CardPokemon";

export default function Pokemons() {
  usePokemon();
  const { pokemon } = useAppSelector(STATE);

  return (
    <div>
      <section></section>
      {pokemon.pokemons.length > 0 ? (
        pokemon.pokemons?.map(pokemon => (
          <CardPokemon pokemon={pokemon} key={pokemon.id} />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}
