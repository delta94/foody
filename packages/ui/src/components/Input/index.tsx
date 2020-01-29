import React from 'react';
// @ts-ignore
import { TextInput, StyleSheet, View } from 'react-native';
import { Text } from '../Text';
import { Spacer } from '../Spacer';

interface Props {
  label?: string;
  customStyle?: {
    [key: string]: any;
  };
  spacer?: number;
  error?: boolean;
  errorMessage?: string;
}

export const Input: React.FC<Props> = ({
  label,
  customStyle,
  spacer,
  error,
  errorMessage,
  ...props
}) => (
  <View style={{ width: '100%' }}>
    {label && (
      <>
        <Text theme="black">{label}</Text>
        <Spacer height={10} />
      </>
    )}
    <TextInput style={[styles.input, customStyle]} {...props} />
    {error && (
      <>
        <Spacer height={10} />
        <Text theme="black">{errorMessage}</Text>
      </>
    )}
    {spacer > 0 && <Spacer height={spacer} />}
  </View>
);

Input.defaultProps = {
  spacer: 40,
  error: false,
  errorMessage: 'This field is required',
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 60,
    // backgroundColor: '#F4F8F7',
    fontSize: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, .2)',
    // shadowColor: 'rgba(0, 0, 0, .1)',
    // shadowOffset: { width: 0, height: 28 },
    // shadowOpacity: 0.8,
    // shadowRadius: 43,
    paddingHorizontal: 20,
  },
});
