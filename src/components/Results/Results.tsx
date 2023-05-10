import { Results } from "@/app/pokemons/juegos/memory/page";
import React from "react";

type Props = { results: Results[] };

export default function Results({ results }: Props) {
  return (
    <section>
      <h3>Puntaje</h3>
      <ul>
        {results.map(result => (
          <li key={result.id}>
            {result.name}:{result.description}
          </li>
        ))}
      </ul>
    </section>
  );
}
