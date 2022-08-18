import Link from 'next/link';

import { Text } from '@nextui-org/react';
import Image from 'next/image';

const Logo: React.FC = (): JSX.Element => {
  return (
    <Link href='/'>
      <a
        style={{
          display: 'flex',
        }}
      >
        <Image
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
          width='80px'
          height='80px'
          alt='Icono de la pagina'
        />
        <Text
          h1
          size={40}
          css={{
            textGradient: '45deg, $blue600 -20%, $pink600 50%',
          }}
          weight='bold'
        >
          PocoDex
        </Text>
      </a>
    </Link>
  );
};

export default Logo;
