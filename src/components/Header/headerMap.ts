import { HeaderTypes } from "./types";
export const homeLinkImage: string =
  "https://res.cloudinary.com/di0jcyqyv/image/upload/v1683134087/images-users/v6s5rjroylklci5lustr.png";

export enum LinksHeader {
  Juegos = "Juegos",
  Pokedex = "Pokedex",
  Home = "Home",
}

export const header: HeaderTypes[] = [
  {
    id: 1000,
    link: "/pokemons/juegos",
    name: LinksHeader.Juegos,
  },
  {
    id: 1001,
    link: "/pokemons/pokedex",
    name: LinksHeader.Pokedex,
  },
];
