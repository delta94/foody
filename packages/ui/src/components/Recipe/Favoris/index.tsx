import React from 'react';
import { View, TouchableOpacity } from 'react-native';
// @ts-ignore
import { css } from '@emotion/native';
// @ts-ignore
import { useUpdateFavoris } from '@foody/graphql';
import { FavoriteIcon } from '../../Icon/Favorite';
import { FavoriteOutlineIcon } from '../../Icon/FavoriteOutline';

export interface FavorisProps {
  // TODO: Add recipe type
  recipe: any;
  userFavoris: string[];
  userId: number;
  isAlreadyFavoris: boolean;
  onAddToFavoris: (favoris: any[]) => void;
}

export const Favoris: React.FC<FavorisProps> = ({
  userFavoris,
  isAlreadyFavoris,
  onAddToFavoris,
  userId,
  recipe
}) => {
  const updateFavoris = useUpdateFavoris();

  const onPress = () => {
    let favoris;

    if (isAlreadyFavoris) {
      favoris = userFavoris.filter(({ label }: any) => label !== recipe.label);
    } else {
      favoris = [...userFavoris, recipe];
    }

    updateFavoris({
      variables: { userId, favoris }
    });

    return onAddToFavoris(favoris);
  };

  return (
    <TouchableOpacity onPress={onPress} style={{ zIndex: 2 }}>
      <View
        style={[
          styles.favoris,
          { color: isAlreadyFavoris ? '#9b42da' : '#51509c' }
        ]}>
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
    shadowRadius: 20
  })
};
