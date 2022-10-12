import React, { useContext, useState } from 'react';
import { Card, Text, Button } from '@nextui-org/react';
import { AiFillHeart } from 'react-icons/ai';
import { FaHeartBroken } from 'react-icons/fa';
import { PokemonResult } from '../../Types/index';
import { useRouter } from 'next/router';
import localFavorites from '../../utils/localFavorites';

interface Props {
  data: PokemonResult;
}

const PokeCard: React.FC<Props> = ({ data }) => {
  //   console.log(data.name.slice(0, 1).toUpperCase());

  const name: string =
    data.name.slice(0, 1).toUpperCase() + data.name.slice(1, data.name.length);
  const [isFavorite, setIsFavorite] = useState<boolean>(
    localFavorites.existFavorite(data.id),
  );

  const handleToggle = () => {
    localFavorites.toggleFavorite(data);
    setIsFavorite(!isFavorite);
  };

  const router = useRouter();
  // console.log(data.id);
  return (
    <Card
      isPressable
      isHoverable
      css={{ p: '$6', maxWidth: '350px', minHeight: '250px', m: 10 }}
      onClick={() => router.push(`/pokemon/${data.name}`)}
    >
      <Card.Header>
        <Card.Image alt='Pokemon' src={data.img} width='100%' height={140} />
      </Card.Header>
      <Card.Divider />
      {/* <Card.Body>
        <Text size={14}>Una descripcion re flashera</Text>
      </Card.Body>
      <Card.Divider /> */}
      <Card.Footer
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Button onPress={handleToggle} auto ghost={isFavorite}>
          {isFavorite ? <FaHeartBroken /> : <AiFillHeart />}
        </Button>
        <Text h4 css={{ lineHeight: '$xs' }}>
          {' '}
          {name}
        </Text>
      </Card.Footer>
    </Card>
  );
};

export default PokeCard;
