export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: Species[];
  game_indices: GameIndex[];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: [];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface Ability {
  ability: Species;
  is_hidden: boolean;
  slot: number;
}
export interface ResultsAllFetch {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

export interface Species {
  name: string;
  url: string;
}

export interface GameIndex {
  game_index: number;
  version: Species;
}

export interface Move {
  move: Species;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: Species;
  version_group: Species;
}

export interface GenerationV {
  "black-white": Sprites;
}

export interface GenerationIv {
  "diamond-pearl": Sprites;
  "heartgold-soulsilver": Sprites;
  platinum: Sprites;
}

export interface Versions {
  "generation-i": GenerationI;
  "generation-ii": GenerationIi;
  "generation-iii": GenerationIii;
  "generation-iv": GenerationIv;
  "generation-v": GenerationV;
  "generation-vi": { [key: string]: Home };
  "generation-vii": GenerationVii;
  "generation-viii": GenerationViii;
}

export interface Sprites {
  animated?: Sprites;
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other?: Other;
  versions?: Versions;
}

export interface GenerationI {
  "red-blue": RedBlue;
  yellow: RedBlue;
}

export interface RedBlue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface GenerationIi {
  crystal: Crystal;
  gold: Gold;
  silver: Gold;
}

export interface Crystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

export interface Gold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent?: string;
}

export interface GenerationIii {
  emerald: OfficialArtwork;
  "firered-leafgreen": Gold;
  "ruby-sapphire": Gold;
}

export interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

export interface Home {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

export interface GenerationVii {
  icons: DreamWorld;
  "ultra-sun-ultra-moon": Home;
}

export interface DreamWorld {
  front_default: string;
  front_female: null;
}

export interface GenerationViii {
  icons: DreamWorld;
}

export interface Other {
  dream_world: DreamWorld;
  home: Home;
  "official-artwork": OfficialArtwork;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Species;
}

export interface Type {
  slot: number;
  type: Species;
}
// TIPO DE EL DAÑO DE LOS POKEMONS

export interface Damage {
  damage_relations: DamageRelations;
  game_indices: GameIndex[];
  generation: Generation;
  id: number;
  move_damage_class: Generation;
  moves: Generation[];
  name: string;
  names: Name[];
  past_damage_relations: any[];
  pokemon: Pokemon[];
}

export interface DamageRelations {
  double_damage_from: Generation[];
  double_damage_to: Generation[];
  half_damage_from: Generation[];
  half_damage_to: Generation[];
  //  no_damage_from:     any[];
  //  no_damage_to:       any[];
}

export interface Generation {
  name: string;
  url: string;
}

export interface GameIndex {
  game_index: number;
  generation: Generation;
}

export interface Name {
  language: Generation;
  name: string;
}

export interface Pokemon {
  pokemon: Generation;
  slot: number;
}
