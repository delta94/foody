import { Button } from '@foody/ui/src/components/Button';
import { STORE } from '@foody/core';
import * as React from 'react';

console.log(STORE);

const App: React.FC = () => {
  return (
    <div>
      Hello, World!
      <Button title="Press Me admin" />
    </div>
  );
};

export default App;
