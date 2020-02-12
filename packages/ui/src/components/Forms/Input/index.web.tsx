import React from 'react';
// @ts-ignore
import { TextInput, StyleSheet, View } from 'react-native';
import { Text } from '../../Text';
import { Spacer } from '../../Spacer';
import { FieldError, NestDataObject } from 'react-hook-form';

interface Props {
  label?: string;
  customStyle?: {
    [key: string]: any;
  };
  spacer?: number;
  onChange?: (event: any) => any;
  error?: FieldError | FieldError[] | NestDataObject<any> | NestDataObject<any>[] | undefined;
  errorMessage?: string;
  bordered?: boolean;
}

export const Input: React.FC<Props> = ({
  label,
  customStyle,
  spacer,
  error,
  errorMessage,
  bordered,
  ...props
}) => (
  <View style={{ width: '100%' }}>
    {label && (
      <>
        <Text theme="black">{label}</Text>
        <Spacer height={10} />
      </>
    )}
    <TextInput style={[styles.input, customStyle, bordered ? styles.bordered : []]} {...props} />
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
  bordered: true,
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 60,
    fontSize: 16,
    outside: 0,
    borderRadius: 6,
    borderWidth: 1,
    backgroundColor: 'white',
    borderWidth: 0,
    paddingHorizontal: 20,
  },
  bordered: {
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, .2)',
  },
});
