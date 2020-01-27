import React from 'react';
import { Text } from '../Text';
import { StyleSheet } from 'react-native';

interface Props {
  title: string;
}

export const Title: React.FC<Props> = ({ title }) => (
  <Text customStyle={styles.title}>{title}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontFamily: 'Poppins Semi Bold',
    fontWeight: '600',
    lineHeight: 47,
  },
});
