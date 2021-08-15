import React, { ReactNode } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import ButtonClean from '../Button';

type FormContainerProps = {
  width?: number;
  loading?: boolean;
  headerText: string;
  buttonText: string;
  onSubmit?: any;
  children?: ReactNode;
  buttonType?: 'submit' | 'button' | 'reset';
  handleClick?(): void;
};

function FormContainer({
  width,
  loading,
  onSubmit,
  buttonType,
  children,
  handleClick,
  headerText,
  buttonText,
}: FormContainerProps) {
  return (
    <Flex
      p="40px 36px 50px 36px"
      bgColor="#b6b6b6"
      w={270 || width}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text marginBottom={38} fontSize={12} fontWeight={400}>
        {headerText}
      </Text>
      <form onSubmit={onSubmit && onSubmit}>
        {children}
        <ButtonClean
          text={buttonText}
          loading={loading}
          type={buttonType}
          handleClick={handleClick && handleClick}
        />
      </form>
    </Flex>
  );
}

export default FormContainer;
