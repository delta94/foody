import React from 'react';
import { View, TouchableOpacity } from 'react-native';
// @ts-ignore
import { css } from '@emotion/native';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { HamburgerIcon } from '../Icon/Hamburger';
import { CloseIcon } from '../Icon/Close';

interface Props {
  isActive: boolean;
  onPress: () => void;
}

export const Hamburger: React.FC<Props> = ({ isActive, onPress }) => {
  const { isMobileAndTablet } = useMediaQuery();

  if (!isMobileAndTablet) {
    return null;
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles}>
        {isActive ? <CloseIcon width={16} /> : <HamburgerIcon width={22} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = css({
  alignItems: 'center',
  color: 'white',
  paddingTop: 40
});
