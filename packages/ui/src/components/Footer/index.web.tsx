import React from 'react';
import { Text } from '../Text';
import { Spacer } from '../Spacer';
import { Row } from '../Grid/Row';

const CURRENT_DATE = new Date().getUTCFullYear();

export const Footer: React.FC = () => (
  <Row gutter>
    <Text>{CURRENT_DATE} © Foody</Text>
    <Spacer height={60} />
  </Row>
);
