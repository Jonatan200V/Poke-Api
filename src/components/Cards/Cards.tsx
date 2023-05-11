import { Pokemon } from "@/types/types";
import Image from "next/image";
import React from "react";

interface Props {
  pokemon: Pokemon;
  flipCard: (name: Pokemon, index: number) => void;
  index: number;
  numbersCards: number[];
  numbersCardsCache: number[];
  flipCardPower: number[];
  dimensionsCard: number;
}

export default function Cards({
  pokemon,
  flipCard,
  index,
  numbersCards,
  numbersCardsCache,
  dimensionsCard,
  flipCardPower,
}: Props) {
  return (
    <article
      style={{ width: dimensionsCard, height: dimensionsCard }}
      className={`memory__article ${
        numbersCards.includes(index) ||
        numbersCardsCache.includes(index) ||
        flipCardPower.includes(index)
          ? "memory__click"
          : ""
      }`}
      onClick={() => flipCard(pokemon, index)}
    >
      <div className="memory__front">
        <Image
          className="memory__image"
          src={pokemon?.sprites?.other?.dream_world.front_default || ""}
          alt={pokemon?.name}
          width={200}
          height={200}
        />
      </div>
      <div className="memory__back">
        <Image
          src={
            "https://res.cloudinary.com/di0jcyqyv/image/upload/v1683403971/images-users/cvuxkeakq6rrmvcwncsj.png"
          }
          alt="Pokeball"
          width={dimensionsCard}
          height={dimensionsCard}
        />
      </div>
    </article>
  );
}
