import React from 'react';
// @ts-ignore
import { Text as AppText, StyleSheet } from 'react-native';

export const Text: React.FC = ({ customStyle, children }) => (
  <AppText style={[customStyle, styles.text]}>{children}</AppText>
);

const styles = StyleSheet.create({
  text: {
    fontWeight: 400,
    fontFamily: 'Poppins',
  },
});
