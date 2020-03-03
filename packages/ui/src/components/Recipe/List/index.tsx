import React from 'react';
import { RecipeItem } from '../Item';
import { FlatList } from 'react-native';

interface Props {
  data: any;
}

export const RecipeList: React.FC<Props> = ({ data }) => (
  <FlatList
    data={data}
    style={{
      marginHorizontal: -20
    }}
    numColumns={2}
    renderItem={({ item }) => <RecipeItem recipe={item} />}
  />
);
