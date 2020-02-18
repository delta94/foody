import React from 'react';
import {
  Main,
  Title,
  Text,
  Spacer,
  SearchIngredients,
  // @ts-ignore
} from '@foody/ui';
import { useMe } from '@foody/graphql';
import { ActivityIndicator } from 'react-native';

const Pantries = () => {
  const { data, loading, error } = useMe();

  return (
    <Main gutter>
      <Title title="Mon garde-manger" />
      <Text>Le garde-manger regroupe tout vos ingrédients favoris.</Text>
      <Spacer height={10} />
      <Text>
        Recherchez une recette à tout moment en seléctionnant un ou plusieurs ingrédients si
        dessous.
      </Text>
      <Spacer height={30} />
      {loading ? (
        <ActivityIndicator color="white" size="large" />
      ) : error ? (
        <Text>Error</Text>
      ) : !data.userMe.pantries || data.userMe.pantries.length === 0 ? (
        <Text>Aucun ingrédient dans mon garde-manger.</Text>
      ) : (
        <>
          <Spacer height={15} />
          <SearchIngredients data={data.userMe.pantries} />
        </>
      )}
    </Main>
  );
};

Pantries.path = 'mon-garde-manger';

export default Pantries;
