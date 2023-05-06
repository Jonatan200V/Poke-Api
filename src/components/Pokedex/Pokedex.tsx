import React, { useRef } from "react";
import {
  motion,
  // , useDragControls
} from "framer-motion";
import { Pokemon } from "@/types/types";
import { backgroundColorButton, backgroundColorPokedex } from "./colors";
import { variantsPokedex } from "@/variants/variants";
interface Props {
  pokemon: Pokemon | null;
}
interface Map {
  text: string;
  name: string;
}

export default function Pokedex({ pokemon }: Props) {
  const types = pokemon?.types.map(({ type }) => type.name);
  const dragRef = useRef<HTMLDivElement | null>(null);
  const boxRef = useRef<HTMLButtonElement | null>(null);
  const backgroundPokedex = backgroundColorPokedex(
    pokemon?.types[0].type.name || "",
  );
  const backgroundBtn = backgroundColorButton(
    pokemon?.types[0].type.name || "",
  );
  const background: string = `linear-gradient(90deg, ${backgroundBtn[0]} 0%, ${backgroundBtn[1]} 100%, rgba(74,66,66,0) 200%)`;
  function handleDragEnd() {
    const boxRect = boxRef?.current?.getBoundingClientRect();
    const containerRect = dragRef?.current?.getBoundingClientRect();
    if (boxRect && containerRect) {
      // console.log("====================================");
      // console.log({ boxRect, boxRef });
      // console.log("====================================");
      if (boxRect?.right >= containerRect?.right) {
        // console.log("El objeto ha llegado al final del contenedor.");
        // Aquí se pueden realizar las acciones deseadas cuando el objeto llega al final del contenedor.
      }
    }
  }

  const mapAbout: Map[] = [
    { text: `${pokemon?.weight}`, name: "Peso" },
    {
      text: `${types?.join(" / ")}`,
      name: "Tipo",
    },
    { text: `${pokemon?.height}`, name: "Altura" },
  ];
  const buyMap: Map[] = [
    {
      text: "500",
      name: "Stardust",
    },
    { text: "1", name: "Bulbasaur Candy" },
  ];
  return (
    <motion.article
      className="pokedex"
      style={{
        background: `linear-gradient(
        140deg,
        ${backgroundPokedex[0]}  32%,
        ${backgroundPokedex[1]} 100%
      )`,
      }}
      variants={variantsPokedex}
      initial={"close"}
      animate={"open"}
      exit={"close"}
      transition={{
        type: "spring",
        // , stiffness: 500
      }}
    >
      <div className="pokedex__top">
        <p className="pokedex__cp">
          CP <span className="pokedex__exp">{pokemon?.base_experience}</span>
        </p>
        <div className="pokedex__circle">
          <div className="pokedex__spot" />
        </div>
      </div>
      <div className="pokedex__bottom">
        <motion.img
          className="pokedex__image"
          layoutId={pokemon?.sprites.other?.dream_world.front_default}
          src={pokemon?.sprites.other?.dream_world.front_default || ""}
        />
        <div className="pokedex__info">
          <div className="pokedex__name--hp">
            <h2 className="pokedex__h2">{pokemon?.name}</h2>
            <div className="pokedex__hp" />
            <div>HP {pokemon?.stats[0].base_stat}</div>
          </div>
          <div className="pokedex__btn">
            <button
              className="pokedex__button"
              style={{
                background,
              }}
            >
              Intercambiar
            </button>
          </div>
          <div className="pokedex__about">
            {mapAbout.map(({ name, text }) => (
              <div className="pokedex__map" key={name}>
                <p className="pokedex__p">{text}</p>
                {name === "Tipo" ? (
                  <div className="pokedex__types">
                    {pokemon?.types.map((type, index) => (
                      <img
                        key={index}
                        src={`Types/${type.type.name}.png`}
                        alt={type.type.name}
                        loading="lazy"
                        width={30}
                        height={30}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="pokedex__p">{name}</p>
                )}
              </div>
            ))}
          </div>
          <div className="pokedex__buy">
            {buyMap.map(({ name, text }) => (
              <div className="pokedex__map--buy" key={name}>
                <div className="pokedex__text">{text}</div>
                <div className="pokedex__text">{name}</div>
              </div>
            ))}
            <div></div>
          </div>
          <motion.div className="pokedex__gray">
            <div className="pokedex__background" ref={dragRef}>
              <motion.button
                className="pokedex__power"
                drag="x"
                dragConstraints={dragRef}
                onDragEnd={handleDragEnd}
                // dragControls={dragControls}
                dragSnapToOrigin
                ref={boxRef}
                style={{
                  background,
                }}
              >
                <span className="pokedex__up">Subir de Nivel</span>
                <div className="pokedex__x">
                  <div className="pokedex__two">
                    <div className="pokedex__trhee">
                      <div className="pokedex__drag">X</div>
                    </div>
                  </div>
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
