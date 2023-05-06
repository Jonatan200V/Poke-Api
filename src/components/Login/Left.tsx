import Image from "next/image";
import React from "react";
import { pokebolLogo } from "./images";
import Google from "../icons/login/Google";
import Facebook from "../icons/login/Facebook";
import { useAppDispatch } from "@/store/hooks";
import // browserSessionPersistence,
// signInWithCustomToken,
"firebase/auth";
import { authFirebase } from "@/services/firebase";
import { signInFacebookStore, signInGoogleStore } from "./googleAndFacebook";
import usePersistSesion from "@/hooks/usePersistSesion";

interface ButtonsLogin {
  name: string;
  icon: JSX.Element;
  login: () => void;
}

export default function Left() {
  const dispatch = useAppDispatch();
  usePersistSesion();
  const loginGoogle = async () => {
    await dispatch(signInGoogleStore());
  };
  const loginFacebook = async () => {
    await dispatch(signInFacebookStore());
  };
  const buttons: ButtonsLogin[] = [
    {
      icon: <Google />,
      name: "Google",
      login: loginGoogle,
    },
    {
      icon: <Facebook />,
      name: "Facebook",
      login: loginFacebook,
    },
  ];

  return (
    <article className="login__article login__left">
      <div className="login__container">
        <div className="login__init">
          <Image src={pokebolLogo} alt="Pokebola" width={40} height={40} />
          <span>Disponible en android</span>
        </div>
        <div className="login__text">
          <h1 className="login__title">
            Pokémon Master X el juego mas adictivo de tu vida.
          </h1>
          <p className="login__p">
            Puedes registrarte con tu cuenta de google o facebook, tambien
            puedes jugar sin registrarte pero tus datos no seran guardados hasta
            que inicies sesión.
          </p>
        </div>
        <div className="login__buttons">
          {buttons.map(({ icon, name, login }) => (
            <button key={name} className="login__btn" onClick={login}>
              <i>{icon}</i>
              <span>{name}</span>
            </button>
          ))}
        </div>
        <button onClick={() => authFirebase.signOut()}>LOGOUT</button>
      </div>
    </article>
  );
}
