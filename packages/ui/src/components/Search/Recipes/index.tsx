import React from 'react';
import { View } from 'react-native';
import { Text } from '../../Text';
import { RecipeList } from '../../Recipe/List';

interface Props {
  data: any;
}

export const SearchRecipes: React.FC<Props> = ({ data }) => {
  return (
    <View>
      {data.length > 0 ? (
        <RecipeList data={data} />
      ) : (
        <Text>Aucune recette n&apos;a été trouvée.</Text>
      )}
    </View>
  );
};
