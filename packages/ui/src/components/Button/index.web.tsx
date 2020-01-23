import * as React from 'react';
import { Button as ButtonApp } from 'react-native';

export const Button: React.FC = () => (
  <ButtonApp title="from web" onPress={() => console.log('test')} />
);
