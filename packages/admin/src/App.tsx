import { Button, Text } from '@foody/ui';
import * as React from 'react';

const App: React.FC = () => {
  return (
    <div>
      Hello, World!
      <Text />
      <Button label="Press Me!" onClick={() => console.log('I was pressed!')} />
    </div>
  );
};

export default App;
