import React, { useState } from 'react';
import { StyleProp, TouchableOpacityProps, ViewStyle } from 'react-native';
import { Container, ButtonText } from './styles';
import { IconProps } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

type IconButtonProps = (props: IconProps) => JSX.Element;

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  Icon?: IconButtonProps;
  outline?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = ({ label, Icon, outline = false, containerStyle, ...props }) => {
    const theme = useTheme();
    const [isPressed, setIsPressed] = useState(false);

    return (
    <Container
      activeOpacity={1}
      outline={outline}
      {...props}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={[
        containerStyle,
        {
        backgroundColor: isPressed ? (outline ? theme.colors.gray500 : theme.colors.gray100) : (outline ? 'transparent' : theme.colors.gray200)
      }]}
    >
        {Icon &&
            <Icon 
                size={18}
                color={outline ? theme.colors.gray100 : theme.colors.white}
            />
        }      
      <ButtonText hasIcon={Icon} outline={outline}>{label}</ButtonText>
    </Container>
  );
}

export default Button;
