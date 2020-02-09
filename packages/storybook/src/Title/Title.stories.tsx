import React from 'react';
import { storiesOf } from '@storybook/react';
import { Title, Text, Spacer, Layout } from '@foody/ui';

storiesOf('Title', module).add('Default', () => (
  <Layout>
    <Title title="Want to clear your doubt, in easy way?" />
    <Spacer height={10} />
    <Text>
      Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet
      sodales nisi, quis iaculis nulla iaculis vitae.{' '}
    </Text>
  </Layout>
));
