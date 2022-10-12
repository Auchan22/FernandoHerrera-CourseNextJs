import { Button, Loading, Spacer } from '@nextui-org/react';
import type { GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Layout } from '../components/layouts/';
import PokeList from '../components/ui/PokeList';
import type { PokemonListResponse, PokemonResult } from '../Types/index';
interface Res {
  pokemons: PokemonResult[];
}

const Home: NextPage<Res> = ({ pokemons }) => {
  return (
    <Layout title='PocoDex'>
      <PokeList data={pokemons} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<PokemonListResponse> = async () => {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const json = await data.json();
  const pokemons: PokemonResult[] = json.results.map(
    (poke: PokemonResult, index: number) => ({
      ...poke,
      id: index + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        index + 1
      }.png`,
    }),
  );

  return {
    props: { pokemons }, // will be passed to the page component as props
  };
};

export default Home;
