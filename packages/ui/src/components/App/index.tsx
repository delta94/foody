import React from 'react';
import { StyleSheet, View } from 'react-native';

export const App: React.FC = ({ children }) => <View style={styles.container}>{children}</View>;

const styles = StyleSheet.create({
  container: {
    minHeight: '100vh',
    backgroundImage: 'linear-gradient(218deg, #9b42da 0%, #51509c 100%)',
  },
});
