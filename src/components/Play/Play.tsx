import Image from "next/image";
import React from "react";

interface Props {
  img: string;
  handleClick: () => void;
}

export default function Play({ img, handleClick }: Props) {
  return (
    <button className="memory__button" onClick={handleClick}>
      <Image src={img} alt="Reanudar" width={30} height={30} />
    </button>
  );
}
