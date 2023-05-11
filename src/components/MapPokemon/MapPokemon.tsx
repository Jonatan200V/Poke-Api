"use client";
import { useAppSelector } from "@/store/hooks";
import React from "react";
import EntrenadoresC from "../Entrenadores/EntrenadoresC";

export default function MapPokemon() {
  const { pokemon } = useAppSelector(state => state);
  return (
    <div className="entrenadores">
      {pokemon.entrenadores?.map(entrenadores => (
        <EntrenadoresC entrenadores={entrenadores} key={entrenadores.image} />
      ))}
    </div>
  );
}
