import React from 'react';
import { ActivityIndicator } from 'react-native';

interface Props {
  color?: string | undefined;
  size?: 'small' | 'large';
}

export const Loader: React.FC<Props> = (props) => <ActivityIndicator {...props} />;

Loader.defaultProps = {
  color: 'white',
  size: 'large',
};
