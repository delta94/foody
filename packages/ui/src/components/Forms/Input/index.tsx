import React from 'react';
// @ts-ignore
import { TextInput, StyleSheet, View } from 'react-native';
import { Text } from '../../Text';
import { Spacer } from '../../Spacer';
import { useMediaQuery } from '../../../hooks';

interface Props {
  label?: string;
  customStyle?: {
    [key: string]: any;
  };
  spacer?: null | number;
  onChange?: (event: any) => any;
  error?: any;
  errorMessage?: string;
}

export const Input: React.FC<Props> = ({
  label,
  customStyle,
  spacer,
  error,
  errorMessage,
  ...props
}) => {
  const { isMobileAndTablet } = useMediaQuery();

  return (
    <View style={{ width: '100%', backgroundColor: 'red' }}>
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
      {spacer && spacer > 0 && (
        <Spacer height={spacer || (isMobileAndTablet ? 20 : 40)} />
      )}
    </View>
  );
};

Input.defaultProps = {
  spacer: null,
  error: undefined,
  errorMessage: 'This field is required'
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
    border: 0,
    paddingHorizontal: 20
  }
});
