import React from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  customStyle?: {
    [key: string]: any;
  };
  children: any;
}

export const Column: React.FC<Props> = ({ customStyle, children }) => (
  <View style={[styles.container, customStyle]}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});
