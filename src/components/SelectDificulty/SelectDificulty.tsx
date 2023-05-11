import React from "react";
import { NameDificulty, Nivel } from "@/types/enums";
import { Dificultad } from "@/types/types";
export const dificultad: Dificultad[] = [
  {
    id: 2100,
    dificultad: Nivel.easy,
    name: NameDificulty.easy,
  },
  {
    id: 2101,
    dificultad: Nivel.medium,
    name: NameDificulty.medium,
  },
  {
    id: 2102,
    dificultad: Nivel.pro,
    name: NameDificulty.pro,
  },
];
interface Props {
  changeDificulty: (dificultad: Nivel) => void;
  nameGame: string;
}

export default function SelectDificulty({ changeDificulty, nameGame }: Props) {
  return (
    <>
      <div className="memory__welcome">
        {nameGame}
        {/* {user.user?.name} */}
      </div>
      <div className="memory__select">Seleccione el nivel de dificultad</div>
      <section className="memory__dificulty">
        {dificultad.map(dif => (
          <article key={dif.id} className="memory__buttons">
            <button
              className="memory__button"
              onClick={() => changeDificulty(dif.dificultad)}
            >
              {dif.name}
            </button>
          </article>
        ))}
      </section>
    </>
  );
}
