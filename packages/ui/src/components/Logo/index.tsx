import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Title } from '../Title';

interface Props {
  onPress: () => any;
}

export const Logo: React.FC<Props> = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View>
      <Title title="FOODY" size={32} spacer={null} />
    </View>
  </TouchableOpacity>
);
