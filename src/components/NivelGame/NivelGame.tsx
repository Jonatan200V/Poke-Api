"use client";
import { db } from "@/services/firebase";
import { useAppSelector } from "@/store/hooks";
import { doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
// interface Props {
//   exp: number;
//   nivel: number;
// }
export default function NivelGame() {
  const { user, pokemon } = useAppSelector(state => state);
  const [expUser, setExpUser] = useState<number>(user.user?.exp ?? 0);
  const [nivelUser, setNivelUser] = useState(user.user?.nivel ?? 0);
  // const [experiencia, setExperiencia] = useState<number>(user.user?.exp ?? 0);

  const countExp = nivelUser * 100 * 1.5;
  const scopeExp = (310 / countExp) * 100;
  useEffect(() => {
    const changeExp = async () => {
      if (user.user !== null)
        await updateDoc(doc(db, "users", String(user.idUser)), {
          exp: Number(expUser + 30),
        });
      setExpUser(exp => exp + 30);
    };
    changeExp();
    if (scopeExp > 100) {
      const changeLevel = async () => {
        if (user.user !== null)
          await updateDoc(doc(db, "users", String(user.idUser)), {
            nivel: nivelUser + 1,
          });
        setNivelUser(nivel => nivel + 1);
        await updateDoc(doc(db, "users", String(user.idUser)), {
          exp: Number(expUser - countExp),
        });
        setExpUser(exp => exp - countExp);
      };
      changeLevel();
    }
  }, [pokemon.winGames]);

  return (
    <div className="nivel">
      <div className="nivel__container">
        <div
          className="nivel__background"
          style={{ width: `${scopeExp}%` }}
        ></div>
        <div className="nivel__exp">
          <span>
            {expUser} / {countExp} exp
          </span>
        </div>
      </div>
      <div className="nivel__nivel">{nivelUser}</div>
    </div>
  );
}
