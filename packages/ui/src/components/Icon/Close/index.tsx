import React from 'react';
// @ts-ignore
import Svg, { Path } from 'react-native-svg';
// @ts-ignore

interface Props {
  width?: number;
}

export const CloseIcon: React.FC<Props> = ({ width }) => (
  <Svg width={width} viewBox="0 0 768 768">
    <Path
      fill="currentColor"
      d="M767.986 77.327l-306.673 306.673 306.673 306.673-77.313 77.313-306.673-306.673-306.673 306.673-77.313-77.313 306.673-306.673-306.673-306.673 77.313-77.313 306.673 306.673 306.673-306.673z"
    />
  </Svg>
);

CloseIcon.defaultProps = {
  width: 18
};
