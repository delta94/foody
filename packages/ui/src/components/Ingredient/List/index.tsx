import React from 'react';
import { View, FlatList } from 'react-native';
import { Spacer } from '../../Spacer';
import { Ingredient } from '../Item';

interface Props {
  data: any;
  dataSelected?: any;
  onChange?: (name: string) => any;
}

export const IngredientList: React.FC<Props> = ({ data, ...props }) => (
  <FlatList
    data={data}
    contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
    renderItem={({ item }) => <Item name={item} {...props} />}
    keyExtractor={(item) => item}
  />
);

const Item: React.FC<Props> = ({ name, dataSelected, onChange }) => (
  <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
    <Ingredient
      label={name}
      onPress={() => onChange && onChange(name)}
      isActive={
        dataSelected ? dataSelected.includes(name) : data.includes(name)
      }
    />
    <View style={{ width: '100%' }}>
      <Spacer height={10} width={10} />
    </View>
  </View>
);
