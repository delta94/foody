import React from 'react';
import { Modal } from '../Layout';
import { Title } from '../../Title';
import { View, Image } from 'react-native';
import { Column } from '../../Grid/Column';
import { Text } from '../../Text';
import { useSelector, useDispatch } from '@foody/core';
import { Spacer } from '../../Spacer';
import { Ingredient } from '../../Ingredient/Item';

export const ModalRecipe: React.FC = () => {
  const dispatch = useDispatch();
  const recipe = useSelector((s: any) => s.app.recipe);
  const modalRecipeIsOpen = useSelector((s: any) => s.app.modalRecipeIsOpen);
  const toggleModal = (): void => dispatch({ type: 'LOAD_RECIPE', recipe });

  return (
    // @ts-ignore
    <Modal isOpen={modalRecipeIsOpen} toggleModal={toggleModal}>
      <Column customStyle={{ width: '100%', position: 'relative' }} collapse>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            zIndex: 2,
            padding: 20
          }}>
          <Column collapse customStyle={{ flex: 1, alignItems: 'flex-start' }}>
            <Ingredient
              showFavoris={false}
              customStyle={{ height: 25 }}
              customTextStyle={{ fontSize: 12 }}
              label={`Nombre de personnes : ${recipe?.yield}`}
              isActive
            />
            <Spacer height={8} />
            <Ingredient
              showFavoris={false}
              customStyle={{ height: 25 }}
              customTextStyle={{ fontSize: 12 }}
              label={`Temps Total : ${recipe?.totalTime}`}
              isActive
            />
            <Spacer height={8} />
            <Ingredient
              showFavoris={false}
              customStyle={{ height: 25 }}
              customTextStyle={{ fontSize: 12 }}
              label={`Source : ${recipe?.source}`}
              onPress={(): any => window.open(recipe?.url, '_blank')}
              isActive
            />
          </Column>
        </View>
        <Image
          style={{
            width: '100%',
            height: 300,
            borderRadius: 6,
            backgroundColor: '#E0E0E0'
          }}
          source={{
            uri: recipe?.image
          }}
        />
      </Column>
      <Column collapse customStyle={{ width: '100%' }}>
        <Spacer height={15} />
        <Title
          title={recipe?.label}
          customStyle={{ color: 'black', size: 20, width: '90%' }}
          spacer={20}
          theme="black"
        />
      </Column>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Column collapse customStyle={{ flex: 1 }}>
          <Text theme="black" customStyle={{ fontWeight: 700 }}>
            Ingrédients
          </Text>
          <Spacer height={10} />
          {recipe?.ingredients.map(({ url, text }: any, index: number) => (
            <View key={url}>
              <Text theme="black">{text}</Text>
              {index + 1 < recipe.ingredients.length && <Spacer height={3} />}
            </View>
          ))}
        </Column>
      </View>
    </Modal>
  );
};
