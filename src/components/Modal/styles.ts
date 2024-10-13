import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
`;

export const Content = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 20px;
    padding-bottom: 24px;
    border-radius: 10px;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 24px;
`

export const Title = styled.Text`
   padding-top: 24px;
   padding-bottom: 16px;
   font-size: 18px;
   text-align: center;
   font-family: ${({ theme }) => theme.fonts.bold};
`;
