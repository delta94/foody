import React from 'react';
import { View } from 'react-native';
// @ts-ignore
import { css } from '@emotion/native';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation';
import { useMediaQuery } from '../../hooks';

export const Header: React.FC<any> = ({ goToSearchScreen, ...props }) => {
  const { isDesktop } = useMediaQuery();

  return (
    <View style={[styles.header, { paddingHorizontal: isDesktop ? 50 : 25 }]}>
      <Logo onPress={goToSearchScreen} />
      <Navigation {...props} />
    </View>
  );
};

const styles = {
  header: css({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 2
  })
};
