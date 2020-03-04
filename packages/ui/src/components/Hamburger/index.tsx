import React from 'react';
// @ts-ignore
// import { css } from '@emotion/native';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import { useMediaQuery } from '../../hooks/useMediaQuery';

interface Props {
  onPress: () => void;
}

export const Hamburger: React.FC<Props> = ({ onPress }) => {
  const { isTablet } = useMediaQuery();

  if (!isTablet) {
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
