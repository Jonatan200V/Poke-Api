"use client";
import { Pokemon } from "@/types/types";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { variantsCard } from "@/variants/variants";
import ArrowTop from "../icons/arrows/ArrowTop";

interface Props {
  pokemon: Pokemon;
  onChangePokemon: (poke: Pokemon, index: number) => void;
  index: number;
  viewImage: number | null;
}

export default function CardPokemon({
  pokemon,
  onChangePokemon,
  index,
  viewImage,
}: Props) {
  const [hover, setHover] = useState<boolean>(false);
  const handleHoverStart = () => setHover(() => true);
  const handleHoverEnd = () => setHover(() => false);

  return (
    <motion.article
      className="pokemon"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onClick={() => onChangePokemon(pokemon, index)}
    >
      <div className="pokemon__types">
        {pokemon.types.map(({ type }) => (
          <img
            key={type.url}
            src={`Types/${type.name}.png`}
            width={50}
            height={50}
            alt={type.name}
            loading="lazy"
            title={type.name}
          />
        ))}
      </div>
      <figure className="pokemon__figure" data-image={viewImage === index}>
        <motion.img
          src={pokemon.sprites.other?.dream_world.front_default || ""}
          alt={pokemon.name}
          layoutId={pokemon.sprites.other?.dream_world.front_default}
          variants={variantsCard}
          className="pokemon__image"
          animate={hover ? "imageHover" : "imageInitial"}
        />
      </figure>
      <motion.div
        variants={variantsCard}
        animate={hover ? "open" : "close"}
        className="pokemon__div"
      >
        <section className="pokemon__section">
          <h2 className="pokemon__h2">{pokemon.name}</h2>
          <div className="pokemon__abilities">
            <motion.div
              className="pokemon__arrow"
              animate={hover ? "notView" : "view"}
              variants={variantsCard}
            >
              <ArrowTop />
            </motion.div>
            <p>Habilidades</p>
            <div className="pokemon__skill">
              {pokemon.abilities.map(({ ability }, index) => (
                <div key={index}>{ability.name}</div>
              ))}
            </div>
          </div>
          <div className="pokemon__movements">
            <p>Movimientos</p>
            <div className="pokemon__moves">
              {pokemon.moves.slice(0, 5).map(({ move }, index) => (
                <div key={index}>{move.name}</div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </motion.article>
  );
}
