import { Pokemon } from "@/types/types";
import React from "react";

type Props = {
  pokemon: Pokemon;
  handleClick: (name: string) => void;
};

export default function WhoNames({ pokemon, handleClick }: Props) {
  return (
    <li className="who__names" onClick={() => handleClick(pokemon.name)}>
      {pokemon?.name}
    </li>
  );
}
