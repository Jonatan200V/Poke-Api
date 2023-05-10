"use client";
import { useAppSelector } from "@/store/hooks";
import React from "react";
import CardPokemon from "../CardPokemon/CardPokemon";
import { Pokemon } from "@/types/types";
import NivelGame from "../NivelGame/NivelGame";

export default function YouPokemon() {
  const { pokemon, user } = useAppSelector(state => state);
  // const [experiencia, setExperiencia] = useState<number>(user.user?.exp ?? 0);
  const handleClick = (pokemon: Pokemon, index: number) => {
    index = index * 2;
  };
  // useEffect(() => {
  //   const idTime = setTimeout(() => setExperiencia(experiencia + 30), 2000);
  //   return () => clearTimeout(idTime);
  // }, [experiencia]);
  return (
    <div className="aventure__you">
      <NivelGame />
      {pokemon?.pokemonsPlay?.map((poke, index) => (
        <CardPokemon
          pokemon={poke}
          index={index}
          onChangePokemon={handleClick}
          viewImage={1}
          image={poke?.sprites?.front_default}
          incrementImage
        />
      ))}
    </div>
  );
}
