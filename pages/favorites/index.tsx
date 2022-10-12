import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts';
import { PokemonResult } from '../../Types';
import { localFavorites } from '../../utils';
import { Container, Text } from '@nextui-org/react';
import PokeList from '../../components/ui/PokeList';

const FavoritesPage: NextPage = () => {
  const [favoritos, setFavoritos] = useState<PokemonResult[]>([]);

  useEffect(() => {
    setFavoritos(localFavorites.getFavorites());
  }, [favoritos]);

  return (
    <Layout title='Pocodex - Favoritos'>
      <Container
        display='flex'
        direction='column'
        alignItems='center'
        justify='center'
        css={{
          padding: '20px',
        }}
      >
        <Text h4 b margin={15}>
          {favoritos.length === 0 &&
            'No agregaste ningun pokemon a tu lista de favoritos'}
        </Text>
        {favoritos && <PokeList data={favoritos} />}
      </Container>
    </Layout>
  );
};

export default FavoritesPage;
