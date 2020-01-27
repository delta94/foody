import React from 'react';
import { View } from 'react-native';

interface Props {
  height?: number;
  width?: number;
}

export const Spacer: React.FC<Props> = ({ height, width }) => <View style={{ height, width }} />;

Spacer.defaultProps = {
  height: 0,
  width: 0,
};
