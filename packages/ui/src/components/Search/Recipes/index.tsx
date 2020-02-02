import React from 'react';
import { Row } from '../../Grid/Row';
import { Column } from '../../Grid/Column';
import { Image } from 'react-native';
import { Spacer } from '../../Spacer';
import { Text } from '../../Text';

interface Props {
  data: any;
}

export const SearchRecipes: React.FC<Props> = ({ data }) => {
  return (
    <Row outside direction="row">
      {data.length > 0 ? (
        data.map(({ label, image }: any, index: number) => (
          <>
            <Column key={index} customStyle={{ width: '50%', flexWrap: 'wrap' }}>
              <Image
                style={{ width: '100%', height: 300, borderRadius: 6 }}
                source={{
                  uri: image,
                }}
              />
              <Spacer height={10} />
              <Text customStyle={{ fontWeight: 'bold' }}>{label}</Text>
              <Spacer height={25} />
            </Column>
          </>
        ))
      ) : (
        <Text>Aucune recette n&apos;a été trouvée.</Text>
      )}
    </Row>
  );
};
