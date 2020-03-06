import React from 'react';
// @ts-ignore
import Svg, { Path } from 'react-native-svg';

interface Props {
  width?: number;
}

export const FavoriteOutlineIcon: React.FC<Props> = ({ width }) => (
  <Svg width={width} viewBox="0 0 768 768">
    <Path
      fill="currentColor"
      d="M387.605 636.388q86.533-77.519 127.997-117.18t90.139-93.744 67.604-95.547 18.929-81.124q0-57.689-38.759-95.547t-96.448-37.859q-45.069 0-83.829 25.239t-53.182 64.9h-72.111q-14.423-39.661-53.182-64.9t-83.829-25.239q-57.688 0-96.448 37.859t-38.759 95.547q0 39.661 18.929 81.124t67.604 95.547 90.139 93.744 127.996 117.18l3.605 3.605zM557.066 37.867q90.139 0 150.532 61.295t60.393 149.63q0 52.28-19.831 101.857t-73.013 110.87-96.448 102.758-138.814 127.996l-55.886 50.477-55.886-48.675q-124.391-111.772-179.376-167.658t-101.857-131.603-46.872-146.024q0-88.336 60.393-149.63t150.532-61.294q104.56 0 173.066 81.124 68.505-81.124 173.066-81.124z"
    />
  </Svg>
);

FavoriteOutlineIcon.defaultProps = {
  width: 18
};
