import React from 'react';
import { View } from 'react-native';
// @ts-ignore
import { css } from '@emotion/native';
import { useMediaQuery } from '../../hooks';

export const App: React.FC = ({ children }) => {
  const { isDesktop } = useMediaQuery();

  return (
    <View
      style={[
        styles.container,
        { overflowX: isDesktop ? 'visible' : 'hidden' }
      ]}>
      {children}
    </View>
  );
};

const styles = {
  container: css({
    minHeight: '100vh',
    backgroundImage: 'linear-gradient(315deg, #031f5c 0%, #660469 74%)',
    maxWidth: '100vw'
  })
};
