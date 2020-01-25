import React from 'react';
import { View } from 'react-native';

export const Spacer: React.FC = ({ height, width }) => <View style={{ height, width }} />;

Spacer.defaultProps = {
  height: 'auto',
  width: 'auto',
};
