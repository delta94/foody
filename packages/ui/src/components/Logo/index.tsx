import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Title } from '../Title';
import { useMediaQuery } from '../../hooks';

interface Props {
  onPress: () => any;
}

export const Logo: React.FC<Props> = ({ onPress }) => {
  const { isMobileAndTablet } = useMediaQuery();

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ paddingTop: isMobileAndTablet ? 20 : 0 }}>
        <Title title="FOODY" size={32} spacer={null} />
      </View>
    </TouchableOpacity>
  );
};
