import React from 'react';
// @ts-ignore
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from '../Text';
import { useHover } from '../../hooks/useHover';

interface Props {
  label?: string;
  customStyle?: {
    [key: string]: any;
  };
  onPress: () => any;
}

export const Button: React.FC<Props> = ({ label, customStyle, onPress }) => {
  const { onFocus, onBlur, itemStyles } = useHover(styles.button, styles.hover);

  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        onMouseOver={onFocus}
        onFocus={onFocus}
        onMouseOut={onBlur}
        onBlur={onBlur}
        customStyle={[itemStyles, customStyle]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 60,
    backgroundColor: '#9b42da',
    fontSize: 16,
    fontWeight: 600,
    borderRadius: 6,
    paddingHorizontal: 20,
    transition: '.2s',
  },
  hover: {
    backgroundColor: '#51509c',
  },
});
