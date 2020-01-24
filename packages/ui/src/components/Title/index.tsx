import React from 'react';
// @ts-ignore
import { Text } from '../Text';
import { StyleSheet } from 'react-native';

export const Title: React.FC = ({ title }) => <Text customStyle={styles.title}>{title}</Text>;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontFamily: 'Poppins Semi Bold',
    fontWeight: 600,
    lineHeight: 47,
  },
});
