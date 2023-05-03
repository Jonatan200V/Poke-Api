import { Pokemon } from "@/types/types";
import Image from "next/image";
import React from "react";

interface Props {
  pokemon: Pokemon;
}

export default function CardPokemon({ pokemon }: Props) {
  return (
    <article className="pokemon">
      <h2 className="pokemon__h2">{pokemon.name}</h2>
      <figure className="pokemon__figure">
        <Image
          src={pokemon.sprites.other?.dream_world.front_default || ""}
          alt={pokemon.name}
          width={300}
          height={300}
          className="pokemon__image"
        />
      </figure>
    </article>
  );
}
