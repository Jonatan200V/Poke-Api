import MapPokemon from "@/components/MapPokemon/MapPokemon";
import ModalClassic from "@/components/ModalClassic/ModalClassic";
import YouPokemon from "@/components/YouPokemon/YouPokemon";
import React from "react";

export default function page() {
  return (
    <div className="aventure">
      <ModalClassic />
      <div className="aventure__pokemons">
        <YouPokemon />
        <MapPokemon />
      </div>
    </div>
  );
}
