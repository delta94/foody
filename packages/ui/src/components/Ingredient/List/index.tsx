import React from 'react';
import { View } from 'react-native';
import { Spacer } from '../../Spacer';
import { Ingredient } from '../Item';
import { Row } from '../../Grid/Row';

interface Props {
  data: any;
  dataSelected?: any;
  onChange?: (name: string) => any;
}

export const IngredientList: React.FC<Props> = ({ data, dataSelected, onChange }) => (
  <Row direction="row">
    {data.map((name: any, index: number) => (
      <View key={index} style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Ingredient
          label={name}
          onPress={() => onChange && onChange(name)}
          isActive={dataSelected ? dataSelected.includes(name) : data.includes(name)}
        />
        <View style={{ width: '100%' }}>
          <Spacer height={10} width={10} />
        </View>
      </View>
    ))}
  </Row>
);
