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
    <div className="pokemons">
      {pokemon.pokemons.length > 0 ? (
        <section className="pokemons__section">
          {pokemon.pokemons?.map(pokemon => (
            <CardPokemon pokemon={pokemon} key={pokemon.id} />
          ))}
        </section>
      ) : (
        <Loading />
      )}
    </div>
  );
}
