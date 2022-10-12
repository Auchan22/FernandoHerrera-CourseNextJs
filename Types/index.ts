export interface PokemonListResponse {
  count: number;
  next?: string;
  previous?: string | null;
  results: PokemonResult[];
}

export interface PokemonResult {
  name: string;
  url: string;
  id: number;
  img: string;
}

export interface Stats {
  llave: string;
  valor: number;
}

export interface PokemonData {
  id: string;
  name: string;
  img: string;
  stats: Stats[];
}
