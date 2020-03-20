import React, { useState } from 'react';
import { Input } from '../../Forms/Input';
import { Button } from '../../Button';
import { Row } from '../../Grid/Row';
import { Column } from '../../Grid/Column';
import { useFoodImageRecognition } from '@foody/graphql';

export interface SearchPictureProps {
  onSearch: (url: string) => any;
  onResults: (url: string) => any;
}

// https://assets.lightspeedhq.com/img/2019/07/8aac85b2-blog_foodpresentationtipsfromtopchefs.jpg

export const SearchUrl: React.FC<SearchPictureProps> = ({
  onSearch,
  onResults
}) => {
  const [url, setUrl] = useState('');
  const [skipRecognitionQuery, setSkipRecognitionQuery] = useState(true);

  const onCompleted = (data: any) => {
    setSkipRecognitionQuery(true);
    onResults(data.foodImageRecognition);
  };

  const { loading } = useFoodImageRecognition(
    url,
    skipRecognitionQuery,
    onCompleted
  );

  const onChange = (event: any): any => setUrl(event.target.value);
  const onPress = (): any => {
    setSkipRecognitionQuery(false);
    onSearch(url);
  };

  return (
    <Row direction="row">
      <Column collapse customStyle={{ flex: 1 }}>
        <Input onChange={onChange} />
      </Column>
      <Column customStyle={{ marginRight: -20 }}>
        <Row>
          <Button label="Rechercher" onPress={onPress} loading={loading} />
        </Row>
      </Column>
    </Row>
  );
};
