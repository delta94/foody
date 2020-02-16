import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { withApollo, useUpdatePantries, ME } from '@foody/graphql';

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
      title: 'Ajouter à mon garde-manger',
    });
  });

  const updatePantries = useUpdatePantries();

  const { userMe } = client.readQuery({ query: ME });
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
      variables: { userId: userMe.id, pantries },
    });
  };

  return (
    <TouchableOpacity
      style={[styles.favoris, isActive || isAlreadyFavoris ? styles.active : []]}
      ref={button}
      onPress={onPress}
    >
      <View />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  favoris: {
    position: 'absolute',
    top: -4,
    left: '50%',
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: 'transparent',
    // @ts-ignore
    transform: 'translate3d(-50%, -50%, 0)',
    zIndex: 2,
  },
  active: {
    backgroundColor: 'red',
  },
  inactive: {
    backgroundColor: 'white',
  },
});

// @ts-ignore
export const Favoris = withApollo(ButtonFavoris);
