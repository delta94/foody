import React from 'react';
import { Text } from '../Text';
import { Spacer } from '../Spacer';
import { Row } from '../Grid/Row';
import { useMediaQuery } from '../../hooks';

const CURRENT_DATE = new Date().getUTCFullYear();

export const Footer: React.FC = () => {
  const { isDesktop } = useMediaQuery();

  return (
    <Row gutter>
      <Text>{CURRENT_DATE} © Foody</Text>
      <Spacer height={isDesktop ? 60 : 20} />
    </Row>
  );
};
