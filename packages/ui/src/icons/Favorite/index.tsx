import React from 'react';
// @ts-ignore
import Svg, { Path } from 'react-native-svg';

export const FavoriteIcon = ({ width }) => (
  <Svg width={width} viewBox="0 0 768 768">
    <Path
      fill="currentColor"
      d="M384 742.751l-55.886-50.477q-95.547-86.533-138.814-127.996t-96.449-102.758-73.012-110.87-19.831-101.857q0-88.336 60.393-149.63t150.532-61.294q104.561 0 173.066 81.124 68.505-81.124 173.066-81.124 90.139 0 150.532 61.294t60.393 149.63q0 70.308-46.872 146.024t-101.857 131.603-179.376 167.658z"
    />
  </Svg>
);

FavoriteIcon.defaultProps = {
  width: 18
};
