"use client";
import Cards from "@/components/Cards/Cards";
import Counter from "@/components/Counter/Counter";
import Loading from "@/components/Loading/Loading";
import Modal from "@/components/Modal/Modal";
import Pause from "@/components/Pause/Pause";
import Power from "@/components/Power/Power";
import Results from "@/components/Results/Results";
import WhoAndMemory from "@/components/SettingsGame/WhoAndMemory";
import AddCards from "@/components/icons/AddCards/AddCards";
import Flip from "@/components/icons/Flip/Flip";
import useMixCards from "@/hooks/useMixCards";
import {
  INITIAL_STATE,
  PokemonIndex,
  reducerMemory,
} from "@/reducer-games/memory";
import { useAppSelector } from "@/store/hooks";
import { Pokemon } from "@/types/types";
import { pause } from "@/utils/images-cloudinary";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useReducer } from "react";

export interface Results {
  id: number;
  name: string;
  description: number;
}
const infoTwoCards =
  "Puedes hacer que se revelen dos pares de cartes. Puedes conseguirlas revelando 3 veces dos pares de cartas en menos de 5 segundos.";
const infoFlipCards = "Puedes ver todas las cartas solamente una vez.";
export default function page() {
  const [state, dispatch] = useReducer(reducerMemory, INITIAL_STATE);
  const { user } = useAppSelector(state => state);
  const { poke } = useMixCards(state.countCards, state.restart);

  useEffect(() => {
    if (state.bonify) {
      dispatch({ type: "memory/bonify" });
    }
    if (state.flipPower.length > 0) {
      const idTime = setTimeout(
        () => dispatch({ type: "memory/flip-off-power" }),
        500,
      );
      return () => clearTimeout(idTime);
    }
    if (state.asserts.length === state.countCards * 2 && !state.restart) {
      dispatch({
        type: "memory/game-over",
        payload: {
          message: `Has ganado ${user?.user?.name}`,
          results: true,
        },
      });
    }
    if (state.cardOne && state.cardTwo) {
      const idTime = setTimeout(
        () => dispatch({ type: "memory/compare" }),
        500,
      );
      return () => {
        clearTimeout(idTime);
      };
    }
  }, [
    state.cardOne,
    state.cardTwo,
    state.bonify,
    state.asserts,
    state.flipPower,
  ]);

  const handleStopConfetti = () => {
    dispatch({ type: "memory/confetti" });
  };
  const countTwoCard = Math.floor(state.countPowerTwoCards / 3);
  const addTwoCards = () => {
    if (countTwoCard >= 1) {
      const pokemons: PokemonIndex[] = poke.map((pokemon, index) => {
        return {
          name: pokemon.name,
          index,
        };
      });

      dispatch({ type: "memory/add-cards-power", payload: pokemons });
    }
  };

  const loseGame = () => {
    dispatch({
      type: "memory/game-over",
      payload: {
        message: `Has perdido ${user?.user?.name}`,
        results: false,
      },
    });
  };
  const playGame = () => {
    dispatch({ payload: false, type: "memory/options" });
  };
  const changeDificulty = (cards: number) => {
    dispatch({ payload: cards, type: "memory/changeDificulty" });
  };
  const flipCard = (pokemon: Pokemon, index: number) => {
    if (!state.cardOne || (!state.cardTwo && state.flipPower.length === 0))
      if (!state.asserts.includes(index)) {
        dispatch({ type: "memory/cardgame", payload: { index, pokemon } });
      }
  };
  const pauseGame = () => {
    dispatch({ payload: true, type: "memory/options" });
  };

  const restart = () => {
    dispatch({ type: "memory/restart" });
  };
  const handlePowerFlip = () => {
    if (state.countFlipPowerTouch > 0) {
      dispatch({ type: "memory/flip-power" });
    }
  };
  const results: Results[] = [
    {
      id: 2300,
      name: "Cantidad de clicks",
      description: state.countClicks / 2,
    },
    {
      id: 2301,
      name: "Cantidad de asertaciones",
      description: state.asserts.length / 2,
    },
  ];
  // console.log({ state });

  return (
    <div className="memory">
      <section className="memory__section">
        {poke.length > 0 ? (
          poke.map((pokemon, index) => (
            <Cards
              flipCardPower={state.flipPower}
              dimensionsCard={state.dimensionsCard}
              numbersCards={state.cachePokemons}
              numbersCardsCache={state.asserts}
              index={index}
              flipCard={flipCard}
              pokemon={pokemon}
            />
          ))
        ) : (
          <Loading />
        )}
      </section>
      <div className="memory__options">
        <Counter
          restart={state.restart}
          changeCounter={state.restart}
          pauseGame={state.viewModal}
          bonify={state.bonify}
          time={60}
          gameOver={state.gameOver}
          loseGame={loseGame}
        />
        <div className="memory__tab">
          <div className="memory__power">
            <Power
              explication={infoTwoCards}
              count={countTwoCard}
              handleClick={addTwoCards}
              icon={<AddCards />}
            />
            <Power
              count={state.countFlipPowerTouch}
              handleClick={handlePowerFlip}
              icon={<Flip />}
              explication={infoFlipCards}
            />
          </div>
          <Pause pauseGame={pauseGame} />
        </div>
      </div>
      <AnimatePresence>
        {state.viewModal && (
          <Modal>
            <WhoAndMemory
              nameGame="Juego de Memoria"
              resultWin={state.result}
              gameOver={state.gameOver}
              inGame={state.inGame}
              messageGameOver={state.messageGameOver}
              stopConfetti={state.stopConfetti}
              results={results}
              changeDificulty={changeDificulty}
              playGame={playGame}
              restart={restart}
              handleStopConfetti={handleStopConfetti}
            />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}
