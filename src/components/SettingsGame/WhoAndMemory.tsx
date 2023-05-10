import React from "react";
import SelectDificulty from "../SelectDificulty/SelectDificulty";
import ResultsComponent from "../Results/Results";
import Confetti from "react-confetti";
import Play from "../Play/Play";
import Reload from "../icons/reload/Reload";
import { play } from "@/utils/images-cloudinary";
import { Results } from "@/app/pokemons/juegos/memory/page";
import { Nivel } from "@/types/enums";

interface Props {
  gameOver: boolean;
  resultWin: boolean;
  inGame: boolean;
  stopConfetti: boolean;
  messageGameOver: string;
  nameGame: string;
  results: Results[];
  handleStopConfetti: () => void;
  changeDificulty: (dificultad: Nivel) => void;
  playGame: () => void;
  restart: () => void;
}

export default function WhoAndMemory({
  gameOver,
  resultWin,
  stopConfetti,
  inGame,
  results,
  messageGameOver,
  nameGame,
  changeDificulty,
  playGame,
  restart,
  handleStopConfetti,
}: Props) {
  return (
    <>
      {gameOver && (
        <>
          {resultWin && (
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              recycle={false}
              numberOfPieces={2000}
              onConfettiComplete={handleStopConfetti}
              run={!stopConfetti}
            />
          )}
        </>
      )}
      <div className="memory__modal">
        {inGame ? (
          <div className="memory__results">
            {gameOver && <p>{messageGameOver}</p>}
            <ResultsComponent results={results} />
          </div>
        ) : (
          <SelectDificulty
            nameGame={nameGame}
            changeDificulty={changeDificulty}
          />
        )}
        <div className="memory__buttons--options">
          {!gameOver && <Play img={play} handleClick={playGame} />}
          {inGame && (
            <button className="memory__reload" onClick={restart}>
              <Reload height={40} width={40} />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
