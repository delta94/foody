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
    backgroundImage: 'linear-gradient(218deg, #9b42da 0%, #51509c 100%)',
    maxWidth: '100vw'
  })
};
