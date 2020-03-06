import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { css } from '@emotion/native';
import { Text } from '../Text';
import { Spacer } from '../Spacer';
import { SearchIngredients } from './Ingredients';
import { SearchRecipes } from './Recipes';
import { SearchUrl } from './Url';
import { Link } from '../Link/index.web';
import SearchUpload from './Upload';
import { Checkbox } from '../Forms/Checkbox';
import { useMediaQuery } from '../../hooks/useMediaQuery';

interface State {
  ingredients: any;
  recipes: any;
  upload: boolean;
}

const initialState: State = {
  ingredients: [],
  recipes: [],
  upload: true
};

const IMAGE_PLACEHOLDER = '/assets/images/placeholder/pic.jpg';

export const Search: React.FC = () => {
  const [url, setUrl] = useState(IMAGE_PLACEHOLDER);
  const [state, setState] = useState(initialState);

  const ingredientsIsEmpty = state.ingredients.length === 0;
  const recipesIsEmpty = state.recipes.length === 0;

  const setUpload = (upload: boolean) =>
    setState({
      ...state,
      upload
    });

  const setRecipes = (recipes: any) =>
    setState({
      ...state,
      recipes
    });

  const setIngredients = (ingredients: any) =>
    setState({
      ...state,
      ingredients
    });

  const reset = () => setState(initialState);

  const { isTablet, isMobile, isMobileAndTablet, isDesktop } = useMediaQuery();

  return (
    <View
      style={{
        flexDirection: isMobile ? 'column' : 'row'
      }}>
      <View
        style={{
          flex: 1,
          paddingRight: isMobileAndTablet ? 0 : 100,
          alignItems: 'flex-start'
        }}>
        {!ingredientsIsEmpty || !recipesIsEmpty ? (
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {!recipesIsEmpty && (
              <View style={{ flexDirection: 'row' }}>
                <Link
                  label="Retour aux ingrédients"
                  onPress={() => setRecipes(initialState.recipes)}
                />
                <Spacer width={20} />
              </View>
            )}
            <View style={{ paddingRight: 40 }}>
              <Link label="Nouvelle recherche" onPress={reset} />
            </View>
          </View>
        ) : (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox
              onChange={(): void => setUpload(!state.upload)}
              value={state.upload}
            />
            <Spacer width={10} />
            <TouchableOpacity onPress={() => setUpload(!state.upload)}>
              <Text>Importer une photo</Text>
            </TouchableOpacity>
          </View>
        )}
        <Spacer height={20} />
        {!ingredientsIsEmpty && recipesIsEmpty && (
          <SearchIngredients
            data={state.ingredients.map(({ name }: any) => name)}
            onReceiveRecipes={setRecipes}
          />
        )}
        {!recipesIsEmpty && (
          <SearchRecipes data={state.recipes} numColumns={2} />
        )}
        {ingredientsIsEmpty && (
          <>
            {state.upload ? (
              <SearchUpload onSearch={setUrl} onResults={setIngredients} />
            ) : (
              <SearchUrl onSearch={setUrl} onResults={setIngredients} />
            )}
          </>
        )}
      </View>
      <View>
        <Spacer width={40} height={40} />
      </View>
      <View
        style={[
          styles.image.mobile,
          isTablet ? styles.image.tablet : isDesktop ? styles.image.desktop : {}
        ]}>
        <Image
          style={{ height: 400, borderRadius: 6 }}
          source={{
            uri: url
          }}
        />
      </View>
    </View>
  );
};

const styles = {
  image: {
    mobile: css({
      width: '100%'
    }),
    tablet: css({
      width: '40%'
    }),
    desktop: css({
      width: 400
    })
  }
};
