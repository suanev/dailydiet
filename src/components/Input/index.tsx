import React, { useState } from 'react';
import { Container, Label, TextInput } from './styles';

interface InputProps {
  label: string;
  placeholder: string;
  height?: number;
}

const Input: React.FC<InputProps> = ({ label, placeholder, height }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      <Label>{label}</Label>
      <TextInput
        placeholder={placeholder}
        isFocused={isFocused}
        height={height}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </Container>
  );
}

export default Input;
