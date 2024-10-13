import React from 'react';
import { Modal as RNModal } from 'react-native';

import Button from '../Button';
import { ButtonContainer, Container, Content, Title } from './styles';

interface IProps {
  title: string;
  outlineButtonText?: string;
  primaryButtonText?: string;
  visible: boolean;       
  onClose: () => void;     
  onConfirm: () => void;   
}

const Modal: React.FC<IProps> = ({ title, outlineButtonText, primaryButtonText, visible, onClose, onConfirm }) => {
  return (
    <RNModal transparent={true} visible={visible} animationType="slide">
      <Container>
        <Content>
            <Title>{title}</Title>
            <ButtonContainer>
                <Button label={outlineButtonText ?? 'Cancelar'} outline onPress={onClose} />
                <Button label={primaryButtonText ?? 'Continuar'} onPress={onConfirm} />
            </ButtonContainer>
        </Content>
      </Container>
    </RNModal>
  );
}

export default Modal;
