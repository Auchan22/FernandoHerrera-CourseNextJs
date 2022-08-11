import type { NextPage } from 'next';
import Layout from '../components/Layouts/Layout';

const Home: NextPage = () => {
  return (
    <Layout page={'Home'}>
      <h1 className='title'>Estoy en Home</h1>

      <p className='description'>
        Get started by editing <code className='code'>pages/index.tsx</code>
      </p>
    </Layout>
  );
};

export default Home;
