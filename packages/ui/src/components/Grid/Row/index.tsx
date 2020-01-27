import React from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  customStyle?: {
    [key: string]: any;
  };
  children: any;
  gutter?: boolean;
}

export const Row: React.FC<Props> = ({ customStyle, gutter, children }) => (
  <View style={[styles.container, customStyle, gutter ? styles.gutter : []]}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    maxWidth: 1240,
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  gutter: {
    paddingRight: 20,
    paddingLeft: 20,
  },
});
