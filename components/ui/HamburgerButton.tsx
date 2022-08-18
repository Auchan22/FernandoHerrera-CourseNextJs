import { Button } from '@nextui-org/react';
import { GiHamburgerMenu } from 'react-icons/gi';

const HamburgerButton: React.FC = (): JSX.Element => {
  return (
    <Button
      auto
      color='default'
      css={{
        bgColor: '$purple500',
        '@xs': {
          display: 'block',
        },
        '@sm': {
          display: 'block',
        },
        '@md': {
          display: 'block',
        },
        '@lg': {
          display: 'none',
        },
      }}
    >
      <GiHamburgerMenu />
    </Button>
  );
};

export default HamburgerButton;
