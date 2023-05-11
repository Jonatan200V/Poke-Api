import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
interface Props {
  time: number;
  gameOver: boolean;
  bonify: boolean;
  granBonify?: boolean;
  pauseGame: boolean;
  changeCounter: boolean;
  restart: boolean;
  loseGame: () => void;
}

export default function Counter({
  bonify,
  gameOver,
  time,
  pauseGame,
  changeCounter,
  granBonify,
  loseGame,
  restart,
}: Props) {
  const [counter, setCounter] = useState<number>(time);
  useEffect(() => {
    if (counter <= 0 && !restart) {
      loseGame();
    }
    if (granBonify) {
      setCounter(counter => (counter + 2 > 60 ? 60 : counter + 2));
    }
    if (bonify) {
      setCounter(counter => (counter + 2 > 60 ? 60 : counter + 2));
    }
    if (!gameOver && counter > 0 && !pauseGame) {
      const idTime = setTimeout(() => setCounter(counter => counter - 1), 1000);

      return () => {
        clearTimeout(idTime);
      };
    }
  }, [counter, bonify, gameOver, pauseGame]);
  useEffect(() => {
    setCounter(() => time);
  }, [changeCounter]);

  const timeRest = (Math.abs(counter - 60) / 60) * 100;
  // console.log({ timeRest, counter, abs: Math.abs(counter - 60) });
  return (
    <div className="counter">
      <motion.div
        style={{
          width: `${100 - timeRest}%`, // Anchura de la línea
        }}
        className="counter__control"
        layout
        // animate={controls}
      />
      <span className="counter__span">{counter}</span>
    </div>
  );
}
