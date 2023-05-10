"use client";
import Modal from "@/components/Modal/Modal";
import WhoAndMemory from "@/components/SettingsGame/WhoAndMemory";
import useWhoPokemon from "@/hooks/useWhoPokemon";
import { INITIAL_STATE, reducerWho } from "@/reducer-games/who";
import { useAppSelector } from "@/store/hooks";
import React, { useEffect, useReducer } from "react";
import { Results } from "../memory/page";
import { AnimatePresence } from "framer-motion";
import { Nivel } from "@/types/enums";
import WhoPokemonsCard from "@/components/WhoPokemonsCard/WhoPokemonsCard";
import Pause from "@/components/Pause/Pause";
import Counter from "@/components/Counter/Counter";
import WhoNames from "@/components/WhoNames/WhoNames";
import Power from "@/components/Power/Power";
import Flip from "@/components/icons/Flip/Flip";

const descriptionPower =
  "Cuando completes dos rounds se te dara la posibilidad de seleccionar una card y que se revele.";

export default function page() {
  const [state, dispatch] = useReducer(reducerWho, INITIAL_STATE);
  const { pokemon } = useAppSelector(state => state);
  const laps =
    Nivel.easy === state.countPokemonsWho
      ? 1
      : Nivel.medium === state.countPokemonsWho
      ? 2
      : 3;
  const { poke, pokeOptions } = useWhoPokemon(
    pokemon.pokemons,
    state.cacheWho,
    laps,
    state.countRoundsAsserts,
  );

  useEffect(() => {
    if (state.granBonify) {
      dispatch({ type: "who/granbonify" });
    }
    if (state.bonify) {
      dispatch({ type: "who/bonify" });
    }
    if (state.pokemonsAsserts.length === laps) {
      dispatch({ type: "who/round" });
    }
    if (state.countRecolateRounds === 2) {
      dispatch({ type: "who/reset-recolates-rounds" });
    }
    if (state.countRoundsAsserts === 10) {
      dispatch({
        type: "who/gameover",
        payload: {
          message: `Has ganado`,
          results: true,
        },
      });
    }
  }, [
    state.pokemonsAsserts,
    state.countRecolateRounds,
    state.bonify,
    state.granBonify,
  ]);

  const results: Results[] = [
    {
      id: 2300,
      name: "Cantidad de rounds ganados",
      description: state.countRoundsAsserts,
    },
    {
      id: 2301,
      name: "Cantidad de asertaciones",
      description: state.countAssertAllGame,
    },
  ];

  const playGame = () => {
    dispatch({ type: "who/init", payload: false });
  };
  const pauseGame = () => {
    dispatch({ type: "who/init", payload: true });
  };
  const changeDificulty = (cards: Nivel) => {
    dispatch({ type: "who/change-dificulty", payload: cards });
  };
  const handleStopConfetti = () => {
    dispatch({ type: "who/stop-confetti" });
  };
  const restart = () => {
    dispatch({ type: "who/restart" });
  };
  const loseGame = () => {
    dispatch({
      type: "who/gameover",
      payload: {
        message: `Has perdido`,
        results: false,
      },
    });
  };

  const cardPokemon = (index: number) => {
    dispatch({ type: "who/change-card", payload: index });
  };
  const confirmName = (name: string) => {
    if (poke[state.posCard].name === name) {
      dispatch({ type: "who/assert", payload: poke[state.posCard].name });
    }
  };
  const powerAction = () => {
    if (state.countsPointsPower > 0) {
      dispatch({ type: "who/power", payload: poke[state.posCard] });
    }
  };
  return (
    <div className="who">
      <section className="who__section">
        <div className="who__pokemonswho">
          {poke.map((pokemon, index) => (
            <WhoPokemonsCard
              asserts={state.pokemonsAsserts}
              handleClick={cardPokemon}
              index={index}
              card={state.posCard}
              key={index}
              pokemon={pokemon}
            />
          ))}
        </div>
        <div className="who__pokeoptions">
          {pokeOptions.map(pokemon => (
            <WhoNames
              key={pokemon?.id}
              pokemon={pokemon}
              handleClick={confirmName}
            />
          ))}
        </div>
      </section>
      <div className="memory__options">
        <Counter
          bonify={state.bonify}
          granBonify={laps === 3 ? state.granBonify : undefined}
          changeCounter={state.restart}
          gameOver={state.gameOver}
          loseGame={loseGame}
          pauseGame={state.viewModal}
          restart={state.restart}
          time={60}
        />
        <div className="who__tabs">
          <Power
            explication={descriptionPower}
            icon={<Flip />}
            handleClick={powerAction}
            count={state.countsPointsPower}
          />
          <Pause pauseGame={pauseGame} />
        </div>
      </div>
      <AnimatePresence>
        {state.viewModal && (
          <Modal>
            <WhoAndMemory
              nameGame="Juego de Adivinanza"
              changeDificulty={changeDificulty}
              gameOver={state.gameOver}
              handleStopConfetti={handleStopConfetti}
              inGame={state.inGame}
              messageGameOver={state.messageGameOver}
              playGame={playGame}
              restart={restart}
              resultWin={state.result}
              results={results}
              stopConfetti={state.stopConfetti}
            />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}
