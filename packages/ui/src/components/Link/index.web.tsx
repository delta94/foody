import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from '../Text';

interface Props {
  label: string;
  onPress: () => any;
}

export const Link: React.FC<Props> = ({ label, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text customStyle={styles.text}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  text: {
    borderBottomWidth: 2,
    borderColor: 'white',
  },
});
