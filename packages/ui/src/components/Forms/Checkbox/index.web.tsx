import React from 'react';
import { View, CheckBox } from 'react-native';
import { Text } from '../../Text';

export const Checkbox = ({ ...props }) => (
  <View>
    <CheckBox {...props} />
  </View>
);
