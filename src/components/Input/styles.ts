import styled from 'styled-components/native';

interface TextInputProps {
    isFocused: boolean;
    height?: number;
}

export const Container = styled.View`
  margin-bottom: 16px;
  width: 100%;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.gray100};
  margin-bottom: 4px;
`;

export const TextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.gray100, 
}))<TextInputProps>`
  height: ${({ height }) => height || 48}px;
  width: 100%;
  border-width: 1px;
  border-color: ${({ theme, isFocused }) => isFocused ? theme.colors.gray100 : theme.colors.gray500};
  border-radius: 4px;
  padding-left: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray700};
`;
