import React from 'react';
import { Row } from '../Grid/Row';
import { StyleSheet } from 'react-native';

interface Props {
  children: any;
}

export const Main: React.FC<Props> = ({ children }) => (
  <Row gutter customStyle={styles.container}>
    {children}
  </Row>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
