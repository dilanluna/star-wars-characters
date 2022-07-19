import { Outlet } from 'react-router-dom';
import { Container } from '@chakra-ui/react';

export default function CharactersLayout() {
  return (
    <Container
      py={6}
      maxW={{
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '80em',
        '2xl': '96em',
      }}>
      <Outlet />
    </Container>
  );
}
