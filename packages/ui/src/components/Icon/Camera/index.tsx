import React from 'react';
// @ts-ignore
import Svg, { Path } from 'react-native-svg';
// @ts-ignore

interface Props {
  width?: number;
  color?: string;
}

export const CameraIcon: React.FC<Props> = ({ width, color }) => (
  <Svg width={width} viewBox="0 0 768 768">
    <Path
      fill={color}
      d="M384 576.899q79.323 0 136.111-56.788t56.788-136.111-56.788-136.111-136.111-56.788-136.111 56.788-56.788 136.111 56.788 136.111 136.111 56.788zM268.621 0.005h230.758l70.31 75.717h122.591q30.647 0 53.182 23.437t22.534 54.085v461.516q0 30.647-22.534 54.085t-53.182 23.438h-616.556q-30.647 0-53.182-23.438t-22.534-54.085v-461.516q0-30.647 22.534-54.085t53.182-23.438h122.591zM261.409 384q0-50.478 36.056-86.534t86.534-36.056 86.534 36.056 36.056 86.534-36.056 86.534-86.534 36.056-86.534-36.056-36.056-86.534z"
    />
  </Svg>
);

CameraIcon.defaultProps = {
  width: 18,
  color: 'white'
};
