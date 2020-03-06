import React from 'react';
import { View } from 'react-native';
// @ts-ignore
import { css } from '@emotion/native';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation';

export const Header: React.FC<any> = ({ goToSearchScreen, ...props }) => (
  <View style={styles.header}>
    <Logo onPress={goToSearchScreen} />
    <Navigation {...props} />
  </View>
);

const styles = {
  header: css({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 50,
    zIndex: 2
  })
};
