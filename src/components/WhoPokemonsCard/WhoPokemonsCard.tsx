import { Pokemon } from "@/types/types";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
type Props = {
  pokemon: Pokemon;
  card: number;
  index: number;
  handleClick: (index: number) => void;
  asserts: string[];
};

export default function WhoPokemonsCard({
  pokemon,
  card,
  index,
  asserts,
  handleClick,
}: Props) {
  return (
    <div className="who__card" onClick={() => handleClick(index)}>
      {card === index && (
        <motion.div layoutId="poke-select" className="who__select" />
      )}
      <div style={{ color: "#fff" }}>{pokemon?.name}</div>
      <Image
        data-adivine={asserts.includes(pokemon?.name)}
        className="who__image"
        src={pokemon?.sprites.other?.dream_world?.front_default || ""}
        alt={pokemon?.name}
        width={300}
        height={300}
      />
    </div>
  );
}
