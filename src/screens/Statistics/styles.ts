import styled from "styled-components/native";
import { View } from "react-native";

interface StatBoxProps {
  width?: number;
  backgroundColor?: string;
}
interface ContainerProps {
  bottom: number;
}

interface HeaderProps {
  backgroundColor?: string;
}

interface RowProps {
  width?: number;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;

  padding-bottom: ${({ bottom }) => bottom}px;
  background-color: ${({ theme }) => theme.colors.gray700};
`;

export const Header = styled.View<HeaderProps>`
  align-items: center;

  width: 100%;
  padding-top: 72px;
  padding-bottom: 24px;

  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const BackButton = styled.TouchableOpacity`
  top: 36px;
  padding-left: 36px;

  align-self: flex-start;
`;

export const PercentText = styled.Text`
  text-align: center;

  font-size: 32px;
  margin-top: 52px;

  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.gray100};
`;

export const PercentSubtitle = styled.Text`
  margin-bottom: 20px;

  text-align: center;
  font-size: 14px;

  color: ${({ theme }) => theme.colors.gray200};
`;

export const SectionTitle = styled.Text`
  text-align: center;
  margin-top: 40px;

  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.bold};

  color: ${({ theme }) => theme.colors.gray100};
`;

export const StatsContainer = styled.View`
  width: 100%;
  padding: 20px;

  align-items: center;
`;

export const StatBox = styled.View<StatBoxProps>`
  align-items: center;

  width: ${({ width }) => width || 327}px;
  padding: 16px;
  margin-bottom: 8px;
  border-radius: 8px;

  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ?? theme.colors.gray600};
`;

export const StatNumber = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.bold};

  color: ${({ theme }) => theme.colors.gray100};
`;

export const StatLabel = styled.Text`
  margin-top: 8px;
  font-size: 14px;
  text-align: center;

  color: ${({ theme }) => theme.colors.gray200};
`;

export const Row = styled(View)<RowProps>`
  width: ${({ width }) => width || 327}px;

  flex-direction: row;
  justify-content: space-between;
`;
