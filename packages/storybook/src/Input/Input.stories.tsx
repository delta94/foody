import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input, Layout } from '@foody/ui';

storiesOf('Input', module).add('Default', () => (
  <Layout>
    <Input />
  </Layout>
));
