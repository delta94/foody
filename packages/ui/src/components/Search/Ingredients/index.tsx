import React, { useState } from 'react';
import { View } from 'react-native';
import { Text } from '../../Text';
import { Spacer } from '../../Spacer';
import { Checkbox } from '../../Forms/Checkbox/index.web';
import { Column } from '../../Grid/Column';
import { Button } from '../../Button';
import { useQuery, RECIPES } from '@foody/graphql';

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
          <View key={index} style={{ flexDirection: 'row', width: '25%', flexWrap: 'wrap' }}>
            <View style={{ flexDirection: 'row' }}>
              <Text>{name}</Text>
              <Spacer width={5} />
              <Checkbox onChange={() => onChange(name)} value={ingredients.includes(name)} />
            </View>
            <View style={{ width: '100%' }}>
              <Spacer height={10} />
            </View>
          </View>
        </>
      ))}
      <Column collapse style={{ width: '100%' }}>
        <Spacer height={30} />
        <Button label="Trouver une recette" onPress={onPress} />
        {recipesQuery.loading ? <Text>Chargement ...</Text> : null}
      </Column>
    </View>
  );
};
