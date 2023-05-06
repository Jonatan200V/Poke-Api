type TypesPokemon = {
  [key: string]: string[];
};
export function backgroundColorPokedex(type: string) {
  const types: TypesPokemon = {
    grass: ["#cdf159", "#49894d"],
    fire: ["#ff9d80", "#ff6f7c"],
    water: ["#22b3c2", "#066190"],
    flying: ["#6cbcc5", "#36708d"],
    bug: ["#cee486", "#398a3f"],
    normal: ["#a8a1a1", "#696969"],
    poison: ["#a75ac2", "#691cb2"],
    rock: ["#ea810c", "#b02c05"],
    steel: ["#b1b9bc", "#a9aaa9"],
    psychic: ["#d0c3dc", "#5e2f51"],
    ice: ["#c9eafa", "#00a5df"],
    ground: ["#f4ae36", "#e38739"],
    ghost: ["#a73e93", "#550f6f"],
    fighting: ["#f3a535", "#db7a38"],
    fairy: ["#eb2276", "#7f0839"],
    electric: ["#ffdf29", "#fcc22f"],
    dragon: ["#e8ba39", "#a99842"],
    dark: ["#004748", "#0f2c2c"],
  };
  return types[type] || ["#fff", "#cecece"];
}
export function backgroundColorButton(type: string) {
  const types: TypesPokemon = {
    grass: ["#95da97", "#29cda8"],
    fire: ["#ff9d80", "#ff6f7c"],
    water: ["#c8dee2", "#beddd6"],
    flying: ["#6cbcc5", "#36708d"],
    bug: ["#95da97", "#29cda8"],
    normal: ["#a8a1a1", "#696969"],
    poison: ["#a75ac2", "#691cb2"],
    rock: ["#ea810c", "#b02c05"],
    steel: ["#b1b9bc", "#a9aaa9"],
    psychic: ["#d0c3dc", "#5e2f51"],
    ice: ["#c9eafa", "#00a5df"],
    ground: ["#f4ae36", "#e38739"],
    ghost: ["#a73e93", "#550f6f"],
    fighting: ["#f3a535", "#db7a38"],
    fairy: ["#eb2276", "#7f0839"],
    electric: ["#ffdf29", "#fcc22f"],
    dragon: ["#e8ba39", "#a99842"],
    dark: ["#004748", "#0f2c2c"],
  };
  return types[type] || ["#fff", "#cecece"];
}
