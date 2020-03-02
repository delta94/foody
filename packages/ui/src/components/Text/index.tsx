import * as React from 'react';
// @ts-ignore
import { css } from '@emotion/native';
import { Text as AppText } from 'react-native';

interface Props {
  customStyle?: {
    [key: string]: any;
  };
  children: any;
  theme?: string;
  onMouseOver?: () => any;
  onFocus?: () => any;
  onMouseOut?: () => any;
  onBlur?: () => any;
}

export const Text: React.FC<Props> = ({
  customStyle,
  children,
  theme,
  ...props
}) => (
  <AppText style={[styles, customStyle, { color: theme }]} {...props}>
    {children}
  </AppText>
);

Text.defaultProps = {
  theme: 'white'
};

const styles = css({
  fontWeight: '400',
  fontFamily: 'Poppins'
});
