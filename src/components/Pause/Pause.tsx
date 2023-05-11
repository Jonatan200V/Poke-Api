import { pause } from "@/utils/images-cloudinary";
import Image from "next/image";
import React from "react";

interface Props {
  pauseGame: () => void;
}

export default function Pause({ pauseGame }: Props) {
  return (
    <button onClick={pauseGame} className="memory__pause">
      <Image src={pause} alt="Pause" width={70} height={70} />
    </button>
  );
}
