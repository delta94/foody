import React from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  customStyle?: {
    [key: string]: any;
  };
  children: any;
  gutter?: boolean;
  outside?: boolean;
  direction?: string;
}

export const Row: React.FC<Props> = ({ customStyle, gutter, outside, direction, children }) => (
  <View
    style={[
      styles.container,
      customStyle,
      gutter ? styles.gutter : [],
      outside ? styles.outside : [],
      { flexDirection: direction },
    ]}
  >
    {children}
  </View>
);

Row.defaultProps = {
  direction: 'column',
  outside: false,
  gutter: false,
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    maxWidth: 1240,
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  gutter: {
    paddingRight: 20,
    paddingLeft: 20,
  },
  outside: {
    marginRight: -20,
    marginLeft: -20,
  },
});
