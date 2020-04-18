import React from 'react';
// @ts-ignore
import Svg, { Path } from 'react-native-svg';

interface Props {
  width?: number;
}

export const HamburgerIcon: React.FC<Props> = ({ width }) => (
  <Svg width={width} viewBox="0 0 768 768">
    <Path
      fill="currentColor"
      d="M0.007 128.005h767.985v85.998h-767.985v-85.998zM0.007 425.999v-83.998h767.985v83.998h-767.985zM0.007 639.995v-85.998h767.985v85.998h-767.985z"
    />
  </Svg>
);

HamburgerIcon.defaultProps = {
  width: 18
};
