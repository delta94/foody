import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
// @ts-ignore
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
import { Video } from '../Video';
import { useDispatch, useSelector } from '@foody/core';

export const Search: React.FC = () => {
  const dispatch = useDispatch();
  const image = useSelector((s: any) => s.app.search.latest.image);
  const ingredients = useSelector((s: any) => s.app.search.latest.ingredients);
  const recipes = useSelector((s: any) => s.app.search.latest.recipes);
  const data = useSelector((s: any) => s.app.search.latest.data);
  const [stream, setStream] = useState(null);
  const [state, setState] = useState({
    ingredients: ingredients.map(({ name }: any) => name),
    recipes,
    upload: false
  });
  const [canShowRecipes, setCanShowRecipes] = useState(false);

  const ingredientsIsEmpty = data.length === 0;
  const recipesIsEmpty = recipes === null;

  const setUpload = (upload: boolean) =>
    setState({
      ...state,
      upload
    });

  const clearRecipes = () => {
    setCanShowRecipes(false);
    dispatch({
      type: 'SEARCH_CLEAR_RECIPES',
      currentPath: 'latest'
    });
  };

  const setIngredients = (ingredients: any) =>
    dispatch({
      type: 'SEARCH_SET_DATA',
      currentPath: 'latest',
      data: ingredients
    });

  const setImageUrl = (url: string): void => {
    dispatch({ type: 'SEARCH_SET_IMAGE', currentPath: 'latest', image: url });
  };

  const reset = () => dispatch({ type: 'SEARCH_CLEAR_LATEST' });

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
                <Link label="Retour aux ingrédients" onPress={clearRecipes} />
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
            currentPath="latest"
            data={data.map(({ name }: any) => name)}
            showRecipes={canShowRecipes}
            canShowRecipes={() => setCanShowRecipes(true)}
          />
        )}
        {!recipesIsEmpty && <SearchRecipes data={recipes} numColumns={2} />}
        {ingredientsIsEmpty && (
          <>
            {state.upload ? (
              <SearchUpload
                onSearch={setImageUrl}
                onResults={setIngredients}
                onSetStream={setStream}
                onTakePhoto={setImageUrl}
              />
            ) : (
              <SearchUrl onSearch={setImageUrl} onResults={setIngredients} />
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
        {stream ? (
          <Video source={stream} />
        ) : (
          <Image
            style={{ height: 400, borderRadius: 6 }}
            source={{
              uri: image
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = {
  image: {
    mobile: css({
      width: '100%',
      backgroundColor: '#E0E0E0',
      borderRadius: 8
    }),
    tablet: css({
      width: '40%'
    }),
    desktop: css({
      alignSelf: 'flex-start',
      position: 'sticky',
      top: 20,
      width: 400
    })
  }
};
