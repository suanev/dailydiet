import React from 'react';
import { View, ViewStyle } from 'react-native';

interface SpacerProps {
  size: number;
  height?: boolean;
  width?: boolean;
}

const Spacer: React.FC<SpacerProps> = ({ size, height, width }) => {
  const isHeight = height ?? true;
  const isWidth = width ?? true;

  const style: ViewStyle = {
    ...(isHeight && { height: size }),
    ...(isWidth && { width: size }),
  };

  return <View style={style} />;
};

export default React.memo(Spacer);
