import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { chakraTheme } from './resources';
import Routes from './routes';
import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <ChakraProvider theme={chakraTheme}>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
