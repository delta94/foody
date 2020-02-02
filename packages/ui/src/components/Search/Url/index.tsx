import React, { useState } from 'react';
import { Input } from '../../Input';
import { Button } from '../../Button';
import { useQuery, FOOD_IMAGE_RECOGNITION } from '@foody/graphql';
import { Text } from '../../Text';

interface Props {
  onSearch: (url: string) => any;
  onResults: (url: string) => any;
}

export const SearchUrl: React.FC<Props> = ({ onSearch, onResults }) => {
  const [url, setUrl] = useState('');
  const [skip, setSkip] = useState(true);

  // @ts-ignore
  const foodImageRecognitionQuery = useQuery(FOOD_IMAGE_RECOGNITION, {
    variables: { image: url },
    skip,
    onCompleted: (data: any) => {
      setSkip(true);
      onResults(data.foodImageRecognition);
    },
    onError: () => setSkip(true),
  });

  // https://assets.lightspeedhq.com/img/2019/07/8aac85b2-blog_foodpresentationtipsfromtopchefs.jpg

  const onChange = (event: any): any => setUrl(event.target.value);

  const onPress = (): any => {
    setSkip(false);
    onSearch(url);
  };

  return (
    <>
      <Input onChange={onChange} />
      <Button label="Rechercher" onPress={onPress} />
      {foodImageRecognitionQuery.loading ? <Text>Chargement...</Text> : null}
    </>
  );
};
