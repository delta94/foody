import React from 'react';
import { View } from 'react-native';
// @ts-ignore
import { css } from '@emotion/native';

export const App: React.FC = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const styles = {
  container: css({
    minHeight: '100vh',
    backgroundImage: 'linear-gradient(218deg, #9b42da 0%, #51509c 100%)',
    maxWidth: '100vw',
    overflowX: 'hidden'
  })
};
