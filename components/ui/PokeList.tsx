import { Container, Row, Col } from '@nextui-org/react';
import React from 'react';
import type { PokemonResult } from '../../Types';
import PokeCard from './PokeCard';

interface Props {
  data: PokemonResult[];
}

const PokeList: React.FC<Props> = ({ data }) => {
  //   console.log(data);
  return (
    <Container
      gap={4}
      display='flex'
      alignItems='center'
      responsive
      justify='center'
      wrap='wrap'
    >
      {data.map((el) => (
        <PokeCard key={el.id} data={el} />
      ))}
    </Container>
  );
};

export default PokeList;
