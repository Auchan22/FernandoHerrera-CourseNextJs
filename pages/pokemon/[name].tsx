import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { PokemonData, PokemonResult, Stats } from '../../Types';
import { useRouter } from 'next/router';
import { Layout } from '../../components/layouts';
import {
  Button,
  Card,
  Container,
  Grid,
  Text,
  Tooltip,
} from '@nextui-org/react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { localFavorites } from '../../utils';

interface Props {
  pokemon: any;
}

const PokemonDetailPage: NextPage<Props> = ({ pokemon }) => {
  const router = useRouter();

  const [stats, setStats] = useState<Stats[]>([]);
  const [isFavorite, setIsFavorite] = useState<boolean>(
    localFavorites.existFavorite(pokemon.id),
  );

  const handleToggle = () => {
    localFavorites.toggleFavorite(pokemon);
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    const { stats } = pokemon;
    let s: Stats[] = stats.map((el: any) => {
      let llave = el.stat.name;
      let valor = el.base_stat;

      return { llave, valor };
    });
    setStats(s);
  }, []);

  const name: string =
    pokemon.name.slice(0, 1).toUpperCase() +
    pokemon.name.slice(1, pokemon.name.length);
  return (
    <Layout title={`PocoDex | ${router.query.name}`}>
      <Grid.Container
        css={{ marginTop: '5px' }}
        gap={2}
        alignItems='center'
        justify='center'
      >
        <Grid xs={12} sm={4}>
          <Card css={{ padding: '10px' }}>
            <Card.Body>
              {' '}
              <Image
                src={pokemon.img}
                width='100%'
                height={200}
                alt={pokemon.name}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card css={{ alignItems: 'center', justifyContent: 'center' }}>
            <Card.Header>
              <Grid.Container
                gap={3}
                alignItems='center'
                justify='space-around'
              >
                <Grid
                  md={8}
                  xs={12}
                  direction='column'
                  alignItems='center'
                  justify='center'
                >
                  <Text h4 b css={{ marginRight: '10px' }}>
                    # {pokemon.id}
                  </Text>
                  <Text h1>{name}</Text>{' '}
                </Grid>

                <Grid md={4} xs={12} alignItems='center' justify='center'>
                  <Button onPress={handleToggle} flat color='gradient' auto>
                    {isFavorite ? 'En Favoritos' : 'Añadir a favoritos'}
                  </Button>
                </Grid>
              </Grid.Container>
            </Card.Header>

            <Card.Body>
              <Grid.Container gap={2} alignItems='center' justify='center'>
                {stats.map((el, index) => (
                  <Grid
                    xs={12}
                    md={2}
                    key={index}
                    css={{ textAlign: 'center' }}
                    direction='column'
                  >
                    <Text
                      h3
                      transform='capitalize'
                      css={{
                        textGradient: '45deg, $blue600 -20%, $pink600 50%',
                      }}
                      b
                    >
                      {el.llave}
                    </Text>
                    <Text h4>{el.valor}</Text>
                  </Grid>
                ))}
              </Grid.Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const json = await res.json();

  const paths = await json.results.map((el: any) => ({
    params: { name: el.name },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // console.log(params);
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params?.name}`);

  const object = await res.json();
  // console.log(pokemon);

  const pokemon: PokemonData = {
    id: object.order,
    name: object.name,
    img: object.sprites.other?.dream_world.front_default,
    stats: object.stats,
  };

  return { props: { pokemon } };
};

export default PokemonDetailPage;
