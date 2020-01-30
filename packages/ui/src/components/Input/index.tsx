import React from 'react';
// @ts-ignore
import { TextInput, StyleSheet, View } from 'react-native';
import { Text } from '../Text';
import { Spacer } from '../Spacer';
import { FieldError, NestDataObject } from 'react-hook-form';

interface Props {
  label?: string;
  customStyle?: {
    [key: string]: any;
  };
  spacer?: number;
  error?: FieldError | FieldError[] | NestDataObject<any> | NestDataObject<any>[] | undefined;
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
    {spacer && spacer > 0 && <Spacer height={spacer} />}
  </View>
);

Input.defaultProps = {
  spacer: 40,
  error: undefined,
  errorMessage: 'This field is required',
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 60,
    fontSize: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, .2)',
    paddingHorizontal: 20,
  },
});
