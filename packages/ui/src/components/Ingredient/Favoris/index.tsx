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
    <TouchableOpacity
      style={[
        styles.favoris,
        isActive || isAlreadyFavoris ? styles.active : []
      ]}
      ref={button}
      onPress={onPress}>
      <View />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  favoris: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: 'transparent'
  },
  active: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  },
  inactive: {
    backgroundColor: 'white'
  }
});

// @ts-ignore
export const Favoris = withApollo(ButtonFavoris);
