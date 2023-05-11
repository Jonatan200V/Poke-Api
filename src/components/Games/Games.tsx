"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Games } from "@/app/pokemons/juegos/page";
interface Props {
  game: Games;
}
export default function GamesCard({ game }: Props) {
  return (
    <div className="games__container">
      <Link href={game.href} className="games__div">
        <Image
          src={game.img}
          className={`games__image ${game.background}`}
          alt={game.name}
          width={500}
          height={500}
        />
        <h2 className="games__name">{game.name}</h2>
      </Link>
    </div>
  );
}
