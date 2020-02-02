import React from 'react';
import { Column } from '../../Grid/Column';
import { Image } from 'react-native';
import { Spacer } from '../../Spacer';
import { Text } from '../../Text';
import { Favoris } from '../../Favoris';

interface Props {
  recipe: any;
}

export const RecipeItem: React.FC<Props> = ({ recipe }) => (
  <Column customStyle={{ width: '50%', flexWrap: 'wrap' }}>
    <Favoris recipe={recipe} />
    <Image
      style={{ width: '100%', height: 300, borderRadius: 6 }}
      source={{
        uri: recipe.image,
      }}
    />
    <Spacer height={10} />
    <Text customStyle={{ fontWeight: 'bold' }}>{recipe.label}</Text>
    <Spacer height={25} />
  </Column>
);
