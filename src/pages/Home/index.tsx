import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { FormContainer } from '../../components';

function Home() {
  const { signOut } = useAuth();

  async function handleSignOut() {
    signOut();
  }

  return (
    <FormContainer
      headerText="Parabens! vc esta logado"
      buttonText="Sair"
      handleClick={handleSignOut}
    />
  );
}

export default Home;
