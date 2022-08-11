import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layouts/Layout';

const About: NextPage = () => {
  return (
    <Layout page={'About'}>
      <h1 className='title'>Estoy en About</h1>

      <p className='description'>
        <code className='code'> Farlopa</code>
      </p>
    </Layout>
  );
};

export default About;
