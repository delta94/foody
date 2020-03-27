import React from 'react';
import { Text } from '../Text';
// @ts-ignore
import { css } from '@emotion/native';
import { Spacer } from '../Spacer';
import { useMediaQuery } from '../../hooks';

interface Props {
  title: string;
  size?: number;
  spacer?: number | null;
  customStyle?: {
    [key: string]: any;
  };
  theme?: string;
}

export const Title: React.FC<Props> = ({
  title,
  size,
  spacer,
  customStyle,
  ...props
}) => {
  const { isDesktop } = useMediaQuery();
  const fontSize = size ? size : isDesktop ? 32 : 28;

  return (
    <>
      <Text customStyle={[styles, { fontSize }, customStyle]} {...props}>
        {title}
      </Text>
      {spacer && <Spacer height={spacer} />}
    </>
  );
};

Title.defaultProps = {
  spacer: 5
};

const styles = css({
  fontFamily: 'Poppins',
  fontWeight: '600',
  lineHeight: 47
});
