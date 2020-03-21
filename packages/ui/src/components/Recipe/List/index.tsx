import React, { useState } from 'react';
import { RecipeItem } from '../Item';
import { FlatList } from 'react-native';
import { ME, withApollo } from '@foody/graphql';

interface Props {
  client: any;
  data: any;
  numColumns?: number;
}

const List: React.FC<Props> = ({ client, data, numColumns }) => {
  const { userMe } = client.readQuery({ query: ME });
  const [favoris, setFavoris] = useState(userMe.favoris ?? []);
  const userFavoris = favoris.map(({ label }: any) => label);

  return (
    <FlatList
      data={data}
      style={{
        marginHorizontal: -20,
        flexWrap: 'wrap'
      }}
      numColumns={numColumns}
      columnWrapperStyle={{ flexWrap: 'wrap' }}
      // TODO: Add recipe type
      renderItem={({ item }: any) => (
        <RecipeItem
          recipe={item}
          userFavoris={favoris}
          onAddToFavoris={setFavoris}
          userId={userMe.id}
          isAlreadyFavoris={userFavoris.includes(item.label)}
        />
      )}
    />
  );
};

List.defaultProps = {
  numColumns: 4
};

// @ts-ignore
export const RecipeList = withApollo(List);
