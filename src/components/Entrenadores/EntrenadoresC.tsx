"use client";
import { Entrenadores } from "@/store/reducer/pokemon";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PokemonsEntrenadores from "../PokemonsEntrenadores/PokemonsEntrenadores";
import { variantsPokedex } from "@/variants/variants";
import Image from "next/image";
import ModalFighting from "../ModalFighting/ModalFighting";
interface Props {
  entrenadores: Entrenadores;
}
export default function EntrenadoresC({ entrenadores }: Props) {
  const [view, setView] = useState<boolean>(false);
  const [combat, setCombat] = useState<boolean>(false);

  const handleStartHover = () => {
    setView(() => true);
  };
  const handleEndHover = () => {
    setView(() => false);
  };

  const hadndleStartCombat = () => {
    setCombat(true);
  };
  return (
    <>
      <motion.div
        className="entrenadores__container"
        onHoverStart={handleStartHover}
        onHoverEnd={handleEndHover}
      >
        <Image
          src={entrenadores.image}
          alt={entrenadores.image}
          width={150}
          height={150}
          className="entrenadores__image"
        />
        <div onClick={hadndleStartCombat}>
          <Image
            src={
              "https://res.cloudinary.com/di0jcyqyv/image/upload/v1683741274/images-users/goqnqbtdyadqzaktxidy.png"
            }
            alt=""
            className="entrenadores__combat"
            width={30}
            height={30}
          />
        </div>
        <AnimatePresence>
          {view && (
            <motion.section
              initial="close"
              animate="open"
              exit="close"
              className="entrenadores__pokemons"
              variants={variantsPokedex}
            >
              {entrenadores.pokemons.map(pokemon => (
                <PokemonsEntrenadores pokemon={pokemon} />
              ))}
            </motion.section>
          )}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>{combat && <ModalFighting />}</AnimatePresence>
    </>
  );
}
