import React from 'react';
import { Button } from '@chakra-ui/react';

type ButtonProps = {
  loading?: boolean;
  text: string;
  type?: 'submit' | 'button' | 'reset';
  handleClick?(): void;
};

function ButtonClean({ loading, type, text, handleClick }: ButtonProps) {
  return (
    <Button
      isLoading={loading}
      h={31}
      w={197}
      fontSize={12}
      borderRadius={0}
      bgColor="#818181"
      type={type || 'button'}
      onClick={handleClick && handleClick}
    >
      {text}
    </Button>
  );
}

export default ButtonClean;
