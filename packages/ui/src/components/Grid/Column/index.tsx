import React from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  customStyle?: {
    [key: string]: any;
  };
  children: any;
  collapse?: boolean;
}

export const Column: React.FC<Props> = ({ customStyle, collapse, children }) => (
  <View style={[styles.container, customStyle, collapse ? styles.collapse : []]}>{children}</View>
);

Column.defaultProps = {
  collapse: false,
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  collapse: {
    paddingLeft: 0,
    paddingRight: 0,
  },
});
