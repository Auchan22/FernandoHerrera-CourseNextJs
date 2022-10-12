import Link from 'next/link';

import { Text } from '@nextui-org/react';
import Image from 'next/image';

const Logo: React.FC = (): JSX.Element => {
  return (
    <Link href='/favorites'>
      <a
        style={{
          display: 'flex',
        }}
      >
        <Text
          h3
          size={20}
          css={{
            textGradient: '45deg, $blue600 -20%, $pink600 50%',
          }}
          weight='bold'
          margin={10}
        >
          Favoritos
        </Text>
      </a>
    </Link>
  );
};

export default Logo;
