import React from 'react';
import { Text, useToast } from '@chakra-ui/react';
import { useAuth } from '../../hooks/useAuth';
import { FormContainer, Input } from '../../components';

function SignIn() {
  const { signIn } = useAuth();
  const toast = useToast();

  function handleSignIn() {
    try {
      signIn();
      toast({ title: 'login efetuado com sucesso!', status: 'success' });
    } catch (e) {
      toast({
        title: 'Ops.. houve algum problema ao efetuar o login',
        status: 'error',
      });
    }
  }

  return (
    <FormContainer
      headerText="Acessar Conta"
      handleClick={handleSignIn}
      buttonText="Entrar"
    >
      <Input id="email" label="Email" />
      <Input id="password" label="Senha" type="password" mButton={1} />
      <Text fontSize={12} marginBottom={5} textAlign="end">
        esqueci minha senha
      </Text>
    </FormContainer>
  );
}

export default SignIn;
