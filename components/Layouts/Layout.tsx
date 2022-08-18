import { Container } from '@nextui-org/react';
import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
  children: JSX.Element[];
  title?: string;
}

export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemón App'}</title>
        <meta name='author' content='Agustín Surila' />
        <meta
          name='description'
          content={`Información sobre el pokémon ${title}`}
        />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />
      </Head>
      <Navbar />

      <Container
        display='flex'
        direction='column'
        alignItems='center'
        justify='center'
      >
        {children}
      </Container>
    </>
  );
};
