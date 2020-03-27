import React from 'react';
import { Row } from '../Grid/Row';

interface Props {
  children: any;
}

export const Main: React.FC<Props> = ({ children }) => (
  <Row gutter customStyle={styles}>
    {children}
  </Row>
);

const styles = {
  flex: 1
};
