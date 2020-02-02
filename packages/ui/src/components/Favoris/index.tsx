import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useMutation, UPDATE_FAVORIS } from '@foody/graphql';

interface Props {
  recipe: any;
}

export const Favoris: React.FC<Props> = ({ recipe }) => {
  const onError = (error: any): any => console.log(error);
  const onCompleted = (data: any): any => console.log(data.updateUser.user.favoris);

  const [updateUserFavoris] = useMutation(UPDATE_FAVORIS, {
    onError,
    onCompleted,
  });

  const onPress = () => {
    // TODO: try to use apollo client cache
    const { app } = JSON.parse(localStorage.getItem('state'));
    updateUserFavoris({ variables: { userId: app.user.id, favoris: [recipe] } });
  };

  // const removeFromFavoris = (item: string): any => {
  //   const favorisUpdated = favoris.filter(i => i !== item);
  //   updateUserFavoris({ variables: { userId, favoris: favorisUpdated } });
  // };

  return (
    <TouchableOpacity style={styles.favoris} onPress={onPress}>
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
    backgroundColor: 'white',
    zIndex: 2,
  },
});
