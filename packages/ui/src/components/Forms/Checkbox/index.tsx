import React from 'react';
import { View, CheckBox as AppCheckBox, CheckBoxProps } from 'react-native';

export const Checkbox: React.FC<CheckBoxProps> = (props) => (
  <View>
    <AppCheckBox {...props} />
  </View>
);
