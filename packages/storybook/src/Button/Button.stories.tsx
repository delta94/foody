import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@foody/ui/dist/components/Button/index.web';

storiesOf('Button', module).add('Default', () => (
  <Button title="fefef" onPress={() => console.log('ffff')} />
));
