import React from 'react';
import { View, CheckBox as AppCheckBox, CheckBoxProps } from 'react-native';

export const Checkbox = (props: CheckBoxProps) => (
  <View>
    <AppCheckBox {...props} />
  </View>
);
