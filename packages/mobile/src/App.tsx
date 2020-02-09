/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '@foody/ui/src/components/Button';

const App: React.FC = () => (
  <View>
    <Text>Test</Text>
    <Button label="fefef" onPress={() => console.log('test')} />
  </View>
);

export default App;
