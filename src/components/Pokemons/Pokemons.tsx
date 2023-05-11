"use client";
import usePokemon from "@/hooks/usePokemon";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { STATE, addPokemon } from "@/store/reducer/pokemon";
import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import CardPokemon from "../CardPokemon/CardPokemon";
import { Pokemon } from "@/types/types";
import Pokedex from "../Pokedex/Pokedex";
import { AnimatePresence } from "framer-motion";

interface State {
  view: boolean;
  pokemon: Pokemon | null;
  index: number | null;
}

export default function Pokemons() {
  // usePokemon();
  const { pokemon } = useAppSelector(STATE);
  const [view, setView] = useState<State["view"]>(false);
  const [viewImage, setViewImage] = useState<State["index"]>(null);
  const [pokemonPokedex, setPokePokedex] = useState<State["pokemon"]>(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const idTime = setTimeout(() => setView(() => true), 100);
    return () => clearTimeout(idTime);
  }, [pokemonPokedex]);
  const changePokemon = (poke: Pokemon, index: number) => {
    setView(() => false);
    setPokePokedex(() => poke);
    dispatch(addPokemon(poke));
    setViewImage(() => index);
  };

  return (
    <div className="pokemons">
      {pokemon.pokemons.length > 0 ? (
        <AnimatePresence>
          <section className="pokemons__section">
            {pokemon.pokemons.slice(0, 100)?.map((pokemon, index) => (
              <CardPokemon
                viewImage={viewImage}
                index={index}
                onChangePokemon={changePokemon}
                pokemon={pokemon}
                key={pokemon.id}
              />
            ))}
          </section>
        </AnimatePresence>
      ) : (
        <Loading />
      )}
      <div className="pokemons__pokedex">
        {view && (
          <AnimatePresence>
            <Pokedex pokemon={pokemonPokedex} />
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
