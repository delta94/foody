import React from 'react';
import { View } from 'react-native';
// @ts-ignore
import { css } from '@emotion/native';

interface Props {
  customStyle?: {
    [key: string]: any;
  };
  children: any;
  gutter?: boolean;
  outside?: boolean;
  direction?: string;
}

export const Row: React.FC<Props> = ({
  customStyle,
  gutter,
  outside,
  direction,
  children
}) => (
  <View
    style={[
      styles.container,
      gutter ? styles.gutter : [],
      outside ? styles.outside : [],
      { flexDirection: direction },
      customStyle
    ]}>
    {children}
  </View>
);

Row.defaultProps = {
  direction: 'column',
  outside: false,
  gutter: false
};

const styles = {
  container: css({
    flexWrap: 'wrap',
    maxWidth: 1240,
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto'
  }),
  gutter: css({
    paddingRight: 20,
    paddingLeft: 20
  }),
  outside: css({
    marginRight: -20,
    marginLeft: -20
  })
};
