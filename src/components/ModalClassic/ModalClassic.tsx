"use client";
import React from "react";
import SelectPokemon from "../SelectPokemon/SelectPokemon";
import { useAppSelector } from "@/store/hooks";
import Link from "next/link";

export default function ModalClassic() {
  const { pokemon } = useAppSelector(state => state);
  return (
    <>
      <div
        className="modal modal__select--pokemon"
        data-pokemon={pokemon.pokemonsPlay.length > 0}
      >
        <div className="modal__classic">
          <Link href={"./pokemons/juegos"}>Volver a seleccionar Juego</Link>
          <p>Selecciona tu pokemon</p>
          <SelectPokemon />
        </div>
      </div>
    </>
  );
}
