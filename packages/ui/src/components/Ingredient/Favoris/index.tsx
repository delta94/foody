import React, { useRef, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
// @ts-ignore
import { css } from '@emotion/native';
import { withApollo, useUpdatePantries, ME } from '@foody/graphql';
import { FavoriteIcon } from '../../Icon/Favorite';
import { FavoriteOutlineIcon } from '../../Icon/FavoriteOutline';

interface Props {
  client: any;
  ingredient: any;
  isActive: boolean;
}

const ButtonFavoris: React.FC<Props> = ({ client, ingredient, isActive }) => {
  const button = useRef(null);

  useEffect(() => {
    // @ts-ignore
    button.current.setNativeProps({
      title: 'Ajouter à mon garde-manger'
    });
  });

  const updatePantries = useUpdatePantries();

  const query = client.readQuery({ query: ME });
  const userMe = query?.userMe;
  const userPantries = userMe.pantries ?? [];
  const isAlreadyFavoris = userPantries.includes(ingredient);

  const onPress = () => {
    let pantries;

    if (isAlreadyFavoris) {
      pantries = userPantries.filter((item: string) => item !== ingredient);
    } else {
      pantries = [...userPantries, ingredient];
    }

    return updatePantries({
      variables: { userId: userMe.id, pantries }
    });
  };

  return (
    <TouchableOpacity ref={button} onPress={onPress}>
      <View style={styles.favoris}>
        {isActive || isAlreadyFavoris ? (
          <FavoriteIcon width={12} />
        ) : (
          <FavoriteOutlineIcon width={12} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  favoris: css({
    width: 20,
    height: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white'
  })
};

// @ts-ignore
export const Favoris = withApollo(ButtonFavoris);
