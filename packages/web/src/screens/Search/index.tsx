import React from 'react';
import {
  Main,
  Title,
  Text,
  Search,
  Spacer,
  useMediaQuery,
  ModalRecipe
  // @ts-ignore
} from '@foody/ui';

const SearchScreen = () => {
  const { isDesktop } = useMediaQuery();

  return (
    <Main gutter>
      <Title title="Recherche" />
      <Text customStyle={{ maxWidth: isDesktop ? '60%' : '100%' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
        sapiente impedit maiores aspernatur culpa, vero amet accusamus corporis
        fugit nesciunt, nostrum nemo.
      </Text>
      <Spacer height={40} />
      <Search />
      <ModalRecipe />
    </Main>
  );
};

SearchScreen.path = 'recherche';

export default SearchScreen;
