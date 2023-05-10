import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getPokemon } from "@/store/reducer/pokemon";
import { Pokemon } from "@/types/types";
import Image from "next/image";
import React from "react";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/services/firebase";
import { searchUser, userRef } from "../Login/googleAndFacebook";

// export const searchUser = async (email: string) => {
//   const createQueryUser = await query(userRef, where("email", "==", email));
//   const existUser = await getDocs(createQueryUser);
//   return existUser;
// };

export default function SelectPokemon() {
  const { pokemon, user } = useAppSelector(state => state);
  const dispatch = useAppDispatch();
  const secureSelectPokemon = async (pokemon: Pokemon) => {
    if (user.user) {
      const existUser = await searchUser(user.user.email);
      await addDoc(
        collection(db, "users", existUser.docs[0].id, "pokemons"),
        pokemon,
      );
    }

    dispatch(getPokemon([pokemon]));
  };
  return (
    <div className="modal__images">
      {pokemon.initPokemonClassic.map(poke => (
        <div className="modal__poke" onClick={() => secureSelectPokemon(poke)}>
          <Image
            className="modal__image"
            src={poke?.sprites?.front_default}
            alt=""
            width={200}
            height={200}
          />
          <h3 className="modal__name">{poke.name}</h3>
        </div>
      ))}
    </div>
  );
}
