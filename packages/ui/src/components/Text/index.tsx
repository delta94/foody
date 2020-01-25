import React from 'react';
import { Text as AppText, StyleSheet } from 'react-native';

export const Text: React.FC = ({ customStyle, children, ...props }) => (
  <AppText style={[customStyle, styles.text]} {...props}>
    {children}
  </AppText>
);

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: 400,
    fontFamily: 'Poppins',
  },
});
