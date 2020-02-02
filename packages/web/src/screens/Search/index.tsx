import React from 'react';
import {
  Main,
  Title,
  Text,
  Search,
  Spacer,
  // @ts-ignore
} from '@foody/ui';

const SearchScreen = () => {
  return (
    <Main gutter>
      <Title title="Recherche" />
      <Text customStyle={{ maxWidth: '60%' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, sapiente impedit
        maiores aspernatur culpa, vero amet accusamus corporis fugit nesciunt, nostrum nemo.
      </Text>
      <Spacer height={40} />
      <Search />
    </Main>
  );
};

SearchScreen.path = 'recherche';

export default SearchScreen;
