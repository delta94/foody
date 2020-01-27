import React from 'react';
// @ts-ignore
import { TextInput, StyleSheet } from 'react-native';

interface Props {
  customStyle?: {
    [key: string]: any;
  };
}

export const Input: React.FC<Props> = ({ customStyle }) => (
  <TextInput style={[styles.input, customStyle]} />
);

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    fontSize: 16,
    borderRadius: 100,
    shadowColor: 'rgba(0, 0, 0, .1)',
    shadowOffset: { width: 0, height: 28 },
    shadowOpacity: 0.8,
    shadowRadius: 43,
    paddingHorizontal: 20,
  },
});
