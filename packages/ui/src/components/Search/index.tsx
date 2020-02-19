import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import { Spacer } from '../Spacer';
import { SearchIngredients } from './Ingredients';
import { SearchRecipes } from './Recipes';
import { SearchUrl } from './Url';
import { Link } from '../Link/index.web';
import SearchUpload from './Upload';
import { Checkbox } from '../Forms/Checkbox';

export const Search: React.FC = () => {
  const [url, setUrl] = useState('/assets/images/placeholder/pic.jpg');
  const [ingredients, setIngredients] = useState(null);
  const [recipes, setRecipes] = useState(null);
  const [useUpload, setUseUpload] = useState(false);

  const reset = () => {
    setIngredients(null);
    setRecipes(null);
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ flex: 1, paddingRight: 100, alignItems: 'flex-start' }}>
        {ingredients || recipes ? (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {recipes && (
              <View style={{ flexDirection: 'row' }}>
                <Link label="Retour aux ingrédients" onPress={() => setRecipes(null)} />
                <Spacer width={20} />
              </View>
            )}
            <View style={{ paddingRight: 40 }}>
              <Link label="Nouvelle recherche" onPress={reset} />
            </View>
          </View>
        ) : (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox onChange={() => setUseUpload(!useUpload)} value={useUpload} />
            <Spacer width={10} />
            <TouchableOpacity onPress={() => setUseUpload(!useUpload)}>
              <Text>Importer une photo</Text>
            </TouchableOpacity>
          </View>
        )}
        <Spacer height={20} />
        {ingredients && !recipes && (
          <SearchIngredients
            data={ingredients.map(({ name }: any) => name)}
            onReceiveRecipes={(items: any) => setRecipes(items)}
          />
        )}
        {recipes && <SearchRecipes data={recipes} />}
        {!ingredients && (
          <>
            {useUpload ? (
              <SearchUpload />
            ) : (
              <SearchUrl onSearch={setUrl} onResults={(data: any) => setIngredients(data)} />
            )}
          </>
        )}
      </View>
      <View>
        <Spacer width={40} />
      </View>
      <View style={{ width: 400 }}>
        <Image
          style={{ height: 400, borderRadius: 6 }}
          source={{
            uri: url,
          }}
        />
      </View>
    </View>
  );
};
