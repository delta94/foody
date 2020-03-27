import React from 'react';
import { Column } from '../../Grid/Column';
import { Image } from 'react-native';
import { Spacer } from '../../Spacer';
import { Text } from '../../Text';
import { Favoris, FavorisProps } from '../Favoris';

type Props = FavorisProps;

export const RecipeItem: React.FC<Props> = ({ recipe, ...props }) => (
  <Column customStyle={{ flex: 1, flexWrap: 'wrap', minWidth: 300 }}>
    <Favoris recipe={recipe} {...props} />
    <Image
      style={{
        width: '100%',
        height: 300,
        borderRadius: 6,
        backgroundColor: '#E0E0E0'
      }}
      source={{
        uri: recipe.image
      }}
    />
    <Spacer height={10} />
    <Text customStyle={{ fontWeight: 'bold' }}>{recipe.label}</Text>
    <Spacer height={25} />
  </Column>
);
