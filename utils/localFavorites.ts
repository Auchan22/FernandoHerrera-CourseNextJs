import { PokemonResult } from '../Types';

const toggleFavorite = (pokemon: PokemonResult) => {
  let favoritos: PokemonResult[] = getFavorites();

  const exists = favoritos.find((el) => el.id === pokemon.id);

  if (exists) {
    favoritos = favoritos.filter((el) => el.id !== pokemon.id);
  } else {
    favoritos.push(pokemon);
  }

  localStorage.setItem('favoritos', JSON.stringify(favoritos));
};

const existFavorite = (pokemonId: number): boolean => {
  if (typeof window === 'undefined') return false;

  let favoritos: PokemonResult[] = getFavorites();
  const exists = favoritos.find((el) => el.id === pokemonId);

  return exists ? true : false;
};

const getFavorites = (): PokemonResult[] => {
  let favoritos: PokemonResult[] = JSON.parse(
    localStorage.getItem('favoritos') || '[]',
  );

  return favoritos;
};

export default { toggleFavorite, existFavorite, getFavorites };
