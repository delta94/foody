import React from 'react';
// @ts-ignore
import { css } from '@emotion/native';
// @ts-ignore
import Svg, { Path } from 'react-native-svg';
// @ts-ignore
import { View, TouchableOpacity } from 'react-native';

interface Props {
  width?: number;
  onPress: () => void;
}

export const ExitIcon: React.FC<Props> = ({ width, onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <Svg width={width} viewBox="0 0 768 768">
        <Path
          fill="white"
          d="M75.726 115.387v537.226h308.274v77.519h-308.274q-30.647 0-53.182-23.436t-22.535-54.083v-537.226q0-30.647 22.535-54.083t53.182-23.436h308.274v77.519h-308.274zM576.896 191.104l191.094 192.896-191.094 192.896-54.083-55.886 99.152-99.152h-391.201v-75.716h391.201l-99.152-100.955z"
        />
      </Svg>
    </TouchableOpacity>
  </View>
);

ExitIcon.defaultProps = {
  width: 18
};

const styles = {
  container: css({
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2
  })
};
