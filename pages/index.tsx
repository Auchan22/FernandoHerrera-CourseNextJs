import { Button, Loading, Spacer } from '@nextui-org/react';
import type { NextPage } from 'next';
import { Layout } from '../components/layouts/';

const Home: NextPage = () => {
  return (
    <Layout title=''>
      <h1>Hola Mundo</h1>
      <Button light bordered size='lg' color='error'>
        Botonacio Loco
      </Button>
      <Spacer y={0.5} />
      <Button rounded size='md' flat bordered color='warning'>
        <Loading type='points' size='lg' />
      </Button>
    </Layout>
  );
};

export default Home;
