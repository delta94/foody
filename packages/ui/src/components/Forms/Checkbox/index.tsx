import React from 'react';
import { View, CheckBox as AppCheckBox, CheckBoxProps } from 'react-native';

interface Props extends CheckBoxProps {
  color?: string;
}

export const Checkbox: React.FC<Props> = (props) => (
  <View>
    <AppCheckBox {...props} />
  </View>
);

Checkbox.defaultProps = {
  color: '#9b42da',
};
