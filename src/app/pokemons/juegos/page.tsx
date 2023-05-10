"use client";
import GamesCard from "@/components/Games/Games";
import { searchUser } from "@/components/Login/googleAndFacebook";
// import { searchUser } from "@/components/SelectPokemon/SelectPokemon";
import { db } from "@/services/firebase";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  CreatePokemonsEntrenadores,
  createPokemonsEntrenadoresInit,
  getPokemon,
} from "@/store/reducer/pokemon";
import { Damage, Pokemon } from "@/types/types";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
const memory =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/61.svg";
const puzzle =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg";
const aventure =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg";
export interface Games {
  id: number;
  href: string;
  name: string;
  img: string;
  background: string;
}

const games: Games[] = [
  {
    id: 2000,
    href: "/pokemons/juegos/memory",
    img: memory,
    name: "Juego de memoria",
    background: "memory-game",
  },
  {
    id: 2001,
    href: "/pokemons/juegos/who",
    img: puzzle,
    name: "Adivina quien es",
    background: "puzzle-game",
  },
  {
    id: 2002,
    href: "/pokemons/juegos/aventure",
    img: aventure,
    name: "Juego clasico",
    background: "aventure-game",
  },
];

export default function page() {
  const { user } = useAppSelector(state => state);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (user.user !== null) {
      const getPokemons = async () => {
        const userFirestore = await searchUser(user?.user?.email || "");
        const pokemons = await getDocs(
          collection(db, "users", userFirestore.docs[0].id, "pokemons"),
        );
        const pokemonStore: Pokemon[] = [];
        pokemons.forEach(poke => {
          pokemonStore.push(poke.data() as Pokemon);
        });
        const url = pokemonStore[0].types[0].type.url;
        const res = await fetch(url);
        const damageRelations = (await res.json()) as Damage;
        const nivel = userFirestore.docs[0].data().nivel as number;
        dispatch(getPokemon(pokemonStore));
        const createPokemonsEntrenadores: CreatePokemonsEntrenadores = {
          nivel: Number(nivel),
          damagePokemon: damageRelations.damage_relations,
        };
        dispatch(createPokemonsEntrenadoresInit(createPokemonsEntrenadores));
      };
      getPokemons();
    }
  }, []);
  // console.log({ user });

  return (
    <div className="games">
      {games.map(game => (
        <GamesCard key={game.id} game={game} />
      ))}
    </div>
  );
}
