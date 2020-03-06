import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { css } from '@emotion/native';
import { useUpdateFavoris, withApollo, ME } from '@foody/graphql';
import { FavoriteIcon } from '../../../icons/Favorite';
import { FavoriteOutlineIcon } from '../../../icons/FavoriteOutline';

interface Props {
  client: any;
  recipe: any;
}

const ButtonFavoris: React.FC<Props> = ({ client, recipe }) => {
  const updateFavoris = useUpdateFavoris();

  const { userMe } = client.readQuery({ query: ME });
  const userFavoris = userMe.favoris
    ? userMe.favoris.map(({ label }: any) => label)
    : [];
  const isAlreadyFavoris = userFavoris.includes(recipe.label);

  const onPress = () => {
    let favoris;

    if (isAlreadyFavoris) {
      favoris = userMe.favoris.filter(
        ({ label }: any) => label !== recipe.label
      );
    } else {
      favoris = [...(userMe?.favoris ?? []), recipe];
    }

    return updateFavoris({
      variables: { userId: userMe.id, favoris }
    });
  };

  return (
    <TouchableOpacity onPress={onPress} style={{ zIndex: 2 }}>
      <View style={[styles.favoris, {color: isAlreadyFavoris ? "#9b42da" : '#51509c'}]}>
        {isAlreadyFavoris ? (
          <FavoriteIcon width={18} />
        ) : (
          <FavoriteOutlineIcon width={18} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  favoris: css({
    position: 'absolute',
    top: 20,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    zIndex: 2,
    shadowColor: 'rgba(0, 0, 0, .3)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
  }),
  active: css({
  })
);

// @ts-ignore
export const Favoris = withApollo(ButtonFavoris);
