import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import { useMediaQuery } from '../../hooks/useMediaQuery';

interface Props {
  onPress: () => void;
}

export const Hamburger: React.FC<Props> = ({ onPress }) => {
  const { isMobileAndTablet } = useMediaQuery();

  if (!isMobileAndTablet) {
    return null;
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>H</Text>
      </View>
    </TouchableOpacity>
  );
};
