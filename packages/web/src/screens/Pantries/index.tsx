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

const Pantries = () => {
  const { data, loading, error } = useMe();
  const [recipes, setRecipes] = useState(null);

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
                  <Link
                    label="Retour aux ingrédients"
                    onPress={() => setRecipes(null)}
                  />
                  <Spacer width={20} />
                </View>
              </View>
            )}
            <Spacer height={20} />
            {!recipes ? (
              <SearchIngredients
                data={data.userMe.pantries}
                onReceiveRecipes={(items: any) => setRecipes(items)}
              />
            ) : (
              <SearchRecipes data={recipes} />
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
