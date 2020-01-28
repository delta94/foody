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
}

export const Input: React.FC<Props> = ({ label, customStyle, spacer }) => (
  <View style={{ width: '100%' }}>
    {label && (
      <>
        <Text theme="black">{label}</Text>
        <Spacer height={10} />
      </>
    )}
    <TextInput style={[styles.input, customStyle]} />
    {spacer > 0 && <Spacer height={spacer} />}
  </View>
);

Input.defaultProps = {
  spacer: 40,
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 60,
    // backgroundColor: '#F4F8F7',
    fontSize: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, .2)',
    // shadowColor: 'rgba(0, 0, 0, .1)',
    // shadowOffset: { width: 0, height: 28 },
    // shadowOpacity: 0.8,
    // shadowRadius: 43,
    paddingHorizontal: 20,
  },
});
