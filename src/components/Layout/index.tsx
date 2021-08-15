import React, { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <Flex
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      bgColor="#CCCCCC"
    >
      {children}
    </Flex>
  );
}

export default Layout;
