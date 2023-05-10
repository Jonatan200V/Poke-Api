import Header from "@/components/Header/Header";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function PokemonLayout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
