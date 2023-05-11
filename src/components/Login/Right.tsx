import Image from "next/image";
import React from "react";
import { imageHome } from "./images";

export default function Right() {
  return (
    <article className="login__article login__right">
      <Image
        className="login__image"
        src={imageHome}
        alt="Bienvenido"
        width={800}
        height={800}
      />
    </article>
  );
}
