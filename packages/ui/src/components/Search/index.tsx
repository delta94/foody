import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { Text } from '../Text';
import { Spacer } from '../Spacer';
import { SearchIngredients } from './Ingredients';
import { SearchRecipes } from './Recipes';
import { SearchUrl } from './Url';
import { Link } from '../Link/index.web';
// import SearchUpload from './Upload';

export const Search: React.FC = () => {
  const [url, setUrl] = useState('/assets/images/placeholder/pic.jpg');
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState(null);

  const reset = () => {
    setIngredients([]);
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
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, sapiente impedit
            maiores asperna.
          </Text>
        )}
        <Spacer height={20} />
        {ingredients && !recipes && (
          <SearchIngredients
            data={ingredients.map(({ name }: any) => name)}
            onReceiveRecipes={(items: any) => setRecipes(items)}
          />
        )}
        {recipes && <SearchRecipes data={recipes} />}
        {/* <SearchUpload /> */}
        {!ingredients && (
          <SearchUrl onSearch={setUrl} onResults={(data: any) => setIngredients(data)} />
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
