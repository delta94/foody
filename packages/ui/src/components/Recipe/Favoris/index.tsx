import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useUpdateFavoris, withApollo, ME } from '@foody/graphql';

interface Props {
  client: any;
  recipe: any;
}

const ButtonFavoris: React.FC<Props> = ({ client, recipe }) => {
  const updateFavoris = useUpdateFavoris();

  const { userMe } = client.readQuery({ query: ME });
  const userFavoris = userMe.favoris ? userMe.favoris.map(({ label }: any) => label) : [];
  const isAlreadyFavoris = userFavoris.includes(recipe.label);

  const onPress = () => {
    let favoris;

    if (isAlreadyFavoris) {
      favoris = userMe.favoris.filter(({ label }: any) => label !== recipe.label);
    } else {
      favoris = [...userMe.favoris, recipe];
    }

    return updateFavoris({
      variables: { userId: userMe.id, favoris },
    });
  };

  return (
    <TouchableOpacity
      style={[styles.favoris, isAlreadyFavoris ? styles.active : styles.inactive]}
      onPress={onPress}
    >
      <View />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  favoris: {
    position: 'absolute',
    top: 10,
    right: 30,
    width: 40,
    height: 40,
    borderRadius: 40,
    zIndex: 2,
  },
  active: {
    backgroundColor: 'grey',
  },
  inactive: {
    backgroundColor: 'white',
  },
});

// @ts-ignore
export const Favoris = withApollo(ButtonFavoris);
