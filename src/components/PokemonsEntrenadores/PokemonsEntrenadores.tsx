import { Pokemon } from "@/types/types";
import Image from "next/image";
import React from "react";

interface Props {
  pokemon: Pokemon;
}

export default function PokemonsEntrenadores({ pokemon }: Props) {
  return (
    <div className="entrenadores__pokemon">
      <h3 className="entrenadores__name">{pokemon.name}</h3>
      <Image
        src={pokemon?.sprites?.front_default || ""}
        alt=""
        width={150}
        height={150}
      />
      <div className="entrenadores__types">
        {pokemon.types.map(({ type }) => (
          <img
            key={type.url}
            src={`../../Types/${type.name}.png`}
            width={50}
            height={50}
            alt={type.name}
            loading="lazy"
            title={type.name}
          />
        ))}
      </div>
    </div>
  );
}
