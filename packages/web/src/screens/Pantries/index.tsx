import React from 'react';
import {
  Main,
  Title,
  Text,
  // @ts-ignore
} from '@foody/ui';

const Pantries = () => (
  <Main gutter>
    <Title title="Pantries" />
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, sapiente impedit maiores
      aspernatur culpa, vero amet accusamus corporis fugit nesciunt, nostrum nemo? Maxime corporis
      temporibus ducimus doloremque nemo dolorum esse.
    </Text>
  </Main>
);

Pantries.path = 'mon-garde-manger';

export default Pantries;
