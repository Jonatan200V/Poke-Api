import { Pokemon } from "@/types/types";
import Image from "next/image";
import React from "react";

interface Props {
  poke: Pokemon;
}

export default function CardYouPokemon({ poke }: Props) {
  return (
    <div>
      <Image
        src={poke?.sprites?.front_default}
        alt={poke.name}
        width={200}
        height={200}
      />
    </div>
  );
}
