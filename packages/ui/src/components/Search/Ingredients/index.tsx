import React, { useState } from 'react';
import { View } from 'react-native';
import { Spacer } from '../../Spacer';
import { Column } from '../../Grid/Column';
import { Button } from '../../Button';
import { useQuery, RECIPES } from '@foody/graphql';
import { IngredientList } from '../../Ingredient/List';
import { useSelector, useDispatch } from '@foody/core';

interface Props {
  data: any;
  currentPath: 'latest' | 'pantries';
  showRecipes: boolean;
  canShowRecipes: () => any;
}

export const SearchIngredients: React.FC<Props> = ({
  data,
  currentPath,
  showRecipes,
  canShowRecipes
}) => {
  const dispatch = useDispatch();
  const searchIngredients = useSelector(
    (s: any) => s.app.search[currentPath].ingredients
  );
  const [ingredients, setIngredients] = useState<string[]>(searchIngredients);
  const [skip, setSkip] = useState(true);

  const recipesQuery = useQuery(RECIPES, {
    variables: { ingredients: ingredients.toString() },
    skip,
    onCompleted: ({ recipes }: any) => {
      setSkip(true);

      if (showRecipes) {
        dispatch({ type: 'SEARCH_SET_RECIPES', currentPath, recipes });
      }
    },
    onError: () => setSkip(true)
  });

  const onChange = (name: string) => {
    if (ingredients.includes(name)) {
      return setIngredients(ingredients.filter((item) => item !== name));
    }

    return setIngredients([...ingredients, name]);
  };

  const onPress = () => {
    setSkip(false);
    dispatch({ type: 'SEARCH_SET_INGREDIENTS', currentPath, ingredients });
    canShowRecipes();
  };

  return (
    <View style={{ flexWrap: 'wrap', flexDirection: 'row', width: '100%' }}>
      <IngredientList
        data={data}
        dataSelected={ingredients}
        onChange={onChange}
      />
      <Column
        collapse
        customStyle={{ width: '100%', alignItems: 'flex-start' }}>
        <Spacer height={30} />
        <View>
          <Button
            label="Trouver une recette"
            onPress={(): void | null =>
              ingredients.length > 0 ? onPress() : null
            }
            loading={recipesQuery.loading}
          />
        </View>
      </Column>
    </View>
  );
};
