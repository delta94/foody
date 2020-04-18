import React from 'react';
import { Button } from '@foody/ui';

const Test: React.FC = () => (
  <div>
    <h1>HELLO !</h1>
    <Button label="test" onPress={() => alert('test')} />
  </div>
);

export default Test;
