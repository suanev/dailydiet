import React, { useState } from 'react';
import { Container, Dot, Label } from './styles';

interface SelectProps {
  label: string;
  colorScheme: 'green' | 'red';
}

const Select: React.FC<SelectProps> = ({ label, colorScheme }) => {
  const [selected, setSelected] = useState(false);

  return (
    <Container
      activeOpacity={1}
      selected={selected}
      colorScheme={colorScheme}
      onPress={() => setSelected(!selected)}
    >
      <Dot colorScheme={colorScheme} />
      <Label>{label}</Label>
    </Container>
  );
}

export default Select;
