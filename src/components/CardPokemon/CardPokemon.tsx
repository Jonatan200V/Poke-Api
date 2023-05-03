import { Pokemon } from "@/types/types";
import Image from "next/image";
import React from "react";

interface Props {
  pokemon: Pokemon;
}

export default function CardPokemon({ pokemon }: Props) {
  return (
    <div>
      {pokemon.name}
      <Image
        src={pokemon.sprites.other?.dream_world.front_default || ""}
        alt={pokemon.name}
        width={300}
        height={300}
      />
    </div>
  );
}
