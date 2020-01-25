import React from 'react';
// @ts-ignore
import { TextInput, StyleSheet } from 'react-native';

export const Input: React.FC = () => <TextInput style={styles.input} />;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 70,
    backgroundColor: 'white',
    fontSize: 18,
    borderRadius: 100,
    shadowColor: 'rgba(0, 0, 0, .1)',
    shadowOffset: { width: 0, height: 28 },
    shadowOpacity: 0.8,
    shadowRadius: 43,
    paddingHorizontal: 35,
  },
});
