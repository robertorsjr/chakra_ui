import React from 'react';
import { FormControl, FormHelperText, Input } from '@chakra-ui/react';

type InputProps = {
  id?: string;
  label?: string;
  helperText?: string;
  type?: 'email' | 'text' | 'password' | 'number';
  mButton?: number;
};

function InputClean({ id, label, type, helperText, mButton }: InputProps) {
  return (
    <FormControl id={id}>
      <Input
        type={type || 'text'}
        borderRadius={0}
        placeholder={label}
        fontSize={12}
        h={31}
        bgColor="#E6E6E6"
        marginBottom={mButton || 4}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}

export default InputClean;
