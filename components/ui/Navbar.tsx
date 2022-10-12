import { Button, Container } from '@nextui-org/react';
import HamburgerButton from './HamburgerButton';
import FavoritesButton from './FavoritesButton';
import Logo from './Logo';

export const Navbar: React.FC = () => {
  return (
    <Container
      fluid
      display='flex'
      direction='row'
      alignItems='center'
      justify='space-between'
      css={{
        boxShadow: '$lg',
        bgColor: '$purple50',
        minWidth: '100vw',
      }}
    >
      <Logo />
      <HamburgerButton />
      <FavoritesButton />
    </Container>
  );
};
