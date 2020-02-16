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
import { ActivityIndicator } from 'react-native';

const Favoris = () => {
  const { data, loading, error } = useMe();

  return (
    <Main gutter>
      <Title title="Mes favoris" />
      <Text>Retrouvez l&apos;intégralité de vos recettes coup de coeur.</Text>
      <Spacer height={30} />
      {loading ? (
        <ActivityIndicator />
      ) : error ? (
        <div>Error</div>
      ) : !data.userMe.favoris || data.userMe.favoris.length === 0 ? (
        <div>Aucune recette favorite.</div>
      ) : (
        <RecipeList data={data.userMe.favoris} />
      )}
    </Main>
  );
};

Favoris.path = 'mes-favoris';

export default Favoris;
