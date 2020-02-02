import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { Text } from '../Text';
import { Spacer } from '../Spacer';
import { SearchIngredients } from './Ingredients';
import { SearchRecipes } from './Recipes';
import { SearchUrl } from './Url';

export const Search: React.FC = () => {
  const [url, setUrl] = useState('/assets/images/placeholder/pic.jpg');
  const [results, setResults] = useState(null);
  const [recipes, setRecipes] = useState(null);

  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ flex: 1, paddingRight: 100 }}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, sapiente impedit
          maiores asperna.
        </Text>
        <Spacer height={20} />
        {results && !recipes && (
          <SearchIngredients data={results} onReceiveRecipes={(items: any) => setRecipes(items)} />
        )}
        {recipes && <SearchRecipes data={recipes} />}
        {!results && <SearchUrl onSearch={setUrl} onResults={(data: any) => setResults(data)} />}
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
