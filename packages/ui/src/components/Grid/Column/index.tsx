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
    style={[styles.container, customStyle, collapse ? styles.collapse : []]}>
    {children}
  </View>
);

Column.defaultProps = {
  collapse: false
};

const styles = {
  container: css({
    paddingLeft: 20,
    paddingRight: 20
  }),
  collapse: css({
    paddingLeft: 0,
    paddingRight: 0
  })
};
