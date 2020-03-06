import React from 'react';
import { RecipeItem } from '../Item';
import { FlatList } from 'react-native';

interface Props {
  data: any;
  numColumns?: number;
}

export const RecipeList: React.FC<Props> = ({ data, numColumns }) => (
  <FlatList
    data={data}
    style={{
      marginHorizontal: -20,
      flexWrap: 'wrap'
    }}
    numColumns={numColumns}
    columnWrapperStyle={{ flexWrap: 'wrap' }}
    renderItem={({ item }) => <RecipeItem recipe={item} />}
  />
);

RecipeList.defaultProps = {
  numColumns: 4
};
