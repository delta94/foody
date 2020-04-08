import React from 'react';
import { Animated } from 'react-native';
// @ts-ignore
import { css } from '@emotion/native';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation';
import { useMediaQuery } from '../../hooks';

export const Header: React.FC<any> = ({ goToSearchScreen, ...props }) => {
  const { isDesktop, isMobileAndTablet } = useMediaQuery();

  return (
    <Animated.View
      style={[
        styles.header,
        {
          flexDirection: isDesktop ? 'row' : 'column',
          paddingHorizontal: isDesktop ? 50 : 0,
          paddingTop: isDesktop ? 40 : 1
        }
      ]}>
      {isDesktop ? (
        <Logo onPress={goToSearchScreen} />
      ) : (
        <Navigation {...props} />
      )}
      {isMobileAndTablet ? (
        <Logo onPress={goToSearchScreen} />
      ) : (
        <Navigation {...props} />
      )}
    </Animated.View>
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
