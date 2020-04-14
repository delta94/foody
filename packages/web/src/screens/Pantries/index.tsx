import React, { useState } from 'react';
import {
  Main,
  Title,
  Text,
  Spacer,
  SearchRecipes,
  SearchIngredients,
  Link,
  ModalRecipe
  // @ts-ignore
} from '@foody/ui';
import { useMe } from '@foody/graphql';
import { ActivityIndicator, View } from 'react-native';
import { useSelector, useDispatch } from '@foody/core';

const Pantries = () => {
  const { data, loading, error } = useMe();
  const recipes = useSelector((s: any) => s.app.search.pantries.recipes);
  const dispatch = useDispatch();
  const [canShowRecipes, setCanShowRecipes] = useState(false);

  const clearRecipes = () => {
    setCanShowRecipes(false);
    dispatch({
      type: 'SEARCH_SET_RECIPES',
      currentPath: 'pantries',
      recipes: null
    });
  };

  return (
    <Main gutter>
      <Title title="Mon garde-manger" />
      <Text>Le garde-manger regroupe tout vos ingrédients favoris.</Text>
      <Spacer height={10} />
      <Text>
        Recherchez une recette à tout moment en seléctionnant un ou plusieurs
        ingrédients si dessous.
      </Text>
      <Spacer height={30} />
      {loading ? (
        <ActivityIndicator color="white" size="large" />
      ) : error ? (
        <Text>Error</Text>
      ) : !data.userMe.pantries || data.userMe.pantries.length === 0 ? (
        <Text>Aucun ingrédient dans mon garde-manger.</Text>
      ) : (
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            {recipes && (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}>
                <View style={{ flexDirection: 'row' }}>
                  <Link label="Retour aux ingrédients" onPress={clearRecipes} />
                  <Spacer width={20} />
                </View>
              </View>
            )}
            <Spacer height={20} />
            {!recipes ? (
              <SearchIngredients
                currentPath="pantries"
                showRecipes={canShowRecipes}
                canShowRecipes={() => setCanShowRecipes(true)}
                data={data.userMe.pantries}
              />
            ) : (
              <SearchRecipes currentPath="pantries" data={recipes} />
            )}
          </View>
        </View>
      )}
      <ModalRecipe />
    </Main>
  );
};

Pantries.path = 'mon-garde-manger';

export default Pantries;
