import React from 'react';
import { Row } from '../Grid/Row';
import { StyleSheet } from 'react-native';

export const Main = ({ children }) => (
  <Row gutter customStyle={styles.container}>
    {children}
  </Row>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
