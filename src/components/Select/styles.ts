import styled from 'styled-components/native';

interface ContainerProps {
  selected: boolean;
  colorScheme: 'green' | 'red';
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 48px;
  border-radius: 8px;
  border-width: ${({ selected }) => (selected ? '1px' : '0')};
  border-color: ${({ theme, selected, colorScheme }) => 
    selected ? (colorScheme === 'green' ? theme.colors.greenDark : theme.colors.redDark) : 'transparent'};
  background-color: ${({ theme, selected, colorScheme }) => 
    selected ? (colorScheme === 'green' ? theme.colors.greenLight : theme.colors.redLight) : theme.colors.gray600};
`;

export const Dot = styled.View<ContainerProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme, colorScheme }) => 
    colorScheme === 'green' ? theme.colors.greenDark : theme.colors.redDark};
  margin-right: 8px;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.gray100};
`;
