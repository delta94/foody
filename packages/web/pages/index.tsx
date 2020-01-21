import { Button, Text } from '@foody/ui';
import * as React from 'react';
import { View } from 'react-native';
import { STORE } from '@foody/core';

console.log(STORE);

const App: React.FC = () => (
  <div>
    Hello World
    <View>
      <Text />
    </View>
    <Button title="a test button" />
  </div>
);

export default App;
