import React from 'react';
import { View, CheckBox as AppCheckBox } from 'react-native';

export const Checkbox = ({ ...props }) => (
  <View>
    <AppCheckBox {...props} />
  </View>
);
