import * as React from 'react';
import { Text as AppText, StyleSheet } from 'react-native';

interface Props {
  customStyle?: {
    [key: string]: any;
  };
  children: any;
  theme?: string;
  onMouseOver?: () => any;
  onFocus?: () => any;
  onMouseOut?: () => any;
  onBlur?: () => any;
}

export const Text: React.FC<Props> = ({ customStyle, children, theme, ...props }) => (
  <AppText style={[styles.text, customStyle, { color: theme }]} {...props}>
    {children}
  </AppText>
);

Text.defaultProps = {
  theme: 'white',
};

const styles = StyleSheet.create({
  text: {
    fontWeight: '400',
    fontFamily: 'Poppins',
  },
});
