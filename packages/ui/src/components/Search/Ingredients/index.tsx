import React, { useState } from 'react';
import { View } from 'react-native';
import { Text } from '../../Text';
import { Spacer } from '../../Spacer';
import { Column } from '../../Grid/Column';
import { Button } from '../../Button';
import { useQuery, RECIPES } from '@foody/graphql';
import { Ingredient } from '../../Ingredient';

interface Props {
  data: any;
  onReceiveRecipes: () => any;
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
      return setIngredients(ingredients.filter(item => item !== name));
    }

    return setIngredients([...ingredients, name]);
  };

  const onPress = () => setSkip(false);

  return (
    <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
      {data.map(({ name }: any, index: number) => (
        <>
          <View key={index} style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <Ingredient
              label={name}
              onPress={() => onChange(name)}
              isActive={ingredients.includes(name)}
            />
            <View style={{ width: '100%' }}>
              <Spacer height={10} />
            </View>
          </View>
          <Spacer width={10} />
        </>
      ))}
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
