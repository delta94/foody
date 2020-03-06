import React from 'react';
// @ts-ignore
import { css } from '@emotion/native';
import { View } from 'react-native';

interface Props {
  customStyle?: {
    [key: string]: any;
  };
  children: any;
  collapse?: boolean;
}

export const Column: React.FC<Props> = ({
  customStyle,
  collapse,
  children
}) => (
  <View
    style={[styles.container, collapse ? styles.collapse : [], customStyle]}>
    {children}
  </View>
);

Column.defaultProps = {
  collapse: false
};

const styles = {
  container: css({
    paddingHorizontal: 20
  }),
  collapse: css({
    paddingHorizontal: 0
  })
};
