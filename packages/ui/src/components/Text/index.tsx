import * as React from 'react';
import { Text as AppText, StyleSheet } from 'react-native';

interface Props {
  customStyle?: {
    [key: string]: any;
  };
  children: any;
  onMouseOver?: () => any;
  onFocus?: () => any;
  onMouseOut?: () => any;
  onBlur?: () => any;
}

export const Text: React.FC<Props> = ({ customStyle, children, ...props }) => (
  <AppText style={[styles.text, customStyle]} {...props}>
    {children}
  </AppText>
);

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: '400',
    fontFamily: 'Poppins',
  },
});
