import styled from 'styled-components/native';

interface ContainerProps {
    outline: boolean;
}

interface ButtonTextProps {
    hasIcon?: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 16px 42px;
  border-radius: 8px;

  border-width: ${({ outline }) => outline ? '1px' : '0'};
  border-color: ${({ theme, outline }) => outline ? theme.colors.gray100 : 'transparent'};
  background-color: ${({ theme, outline }) => 
    outline ? 'transparent' : theme.colors.gray200};
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.bold};
  padding-left: ${({ hasIcon }) => hasIcon ? 8 : 0}px;
  color: ${({ theme, outline }) => outline ? theme.colors.gray100 : theme.colors.white};
`;


