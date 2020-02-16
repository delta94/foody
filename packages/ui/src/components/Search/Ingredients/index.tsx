import React, { useState } from 'react';
import { View } from 'react-native';
import { Text } from '../../Text';
import { Spacer } from '../../Spacer';
import { Column } from '../../Grid/Column';
import { Button } from '../../Button';
import { useQuery, RECIPES } from '@foody/graphql';
import { IngredientList } from '../../Ingredient/List';

interface Props {
  data: any;
  onReceiveRecipes: (data: any) => any;
}

export const SearchIngredients: React.FC<Props> = ({ data, onReceiveRecipes }) => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [skip, setSkip] = useState(true);

  // @ts-ignore
  const recipesQuery = useQuery(RECIPES, {
    variables: { ingredients: ingredients.toString() },
    skip,
    onCompleted: (data: any) => {
      setSkip(true);
      onReceiveRecipes(data.recipes);
    },
    onError: () => setSkip(true),
  });

  const onChange = (name: string) => {
    if (ingredients.includes(name)) {
      return setIngredients(ingredients.filter((item) => item !== name));
    }

    return setIngredients([...ingredients, name]);
  };

  const onPress = () => setSkip(false);

  return (
    <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
      <IngredientList
        data={data.map(({ name }: any) => name)}
        dataSelected={ingredients}
        onChange={onChange}
      />
      <Column collapse customStyle={{ width: '100%', alignItems: 'flex-start' }}>
        <Spacer height={30} />
        <View>
          <Button label="Trouver une recette" onPress={onPress} />
        </View>
        {recipesQuery.loading ? <Text>Chargement ...</Text> : null}
      </Column>
    </View>
  );
};
