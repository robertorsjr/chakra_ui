import React from 'react';
import { Button, Container, Text } from '@chakra-ui/react';
import { useAuth } from '../hooks/useAuth';

function Home() {
  const { signOut } = useAuth();

  async function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <Button onClick={handleSignOut} colorScheme="teal" size="lg">
        Sair
      </Button>
      <Text>Você esta logado</Text>
    </Container>
  );
}

export default Home;
