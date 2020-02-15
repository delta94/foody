import React from 'react';
import {
  Main,
  Title,
  Text,
  Spacer,
  RecipeList,
  // @ts-ignore
} from '@foody/ui';
// @ts-ignore
import { useMe } from '@foody/graphql';

const Favoris = () => {
  const { data, loading } = useMe();

  console.log(data);

  return (
    <Main gutter>
      <Title title="Mes favoris" />
      <Text>Retrouvez l&apos;intégralité de vos recettes coup de coeur.</Text>
      <Spacer height={30} />
      {loading ? <Text>Chargement</Text> : <RecipeList data={data.userMe.favoris} />}
    </Main>
  );
};

Favoris.path = 'mes-favoris';

export default Favoris;
