import React from 'react';
import { Button, Container, Text } from '@chakra-ui/react';
import { useAuth } from '../hooks/useAuth';

function Login() {
  const { signIn } = useAuth();

  function handleSignIn() {
    signIn();
  }

  return (
    <Container>
      <Button onClick={handleSignIn} colorScheme="teal" size="lg">
        Logar
      </Button>
      <Text>Clique no botão para logar</Text>
    </Container>
  );
}

export default Login;
