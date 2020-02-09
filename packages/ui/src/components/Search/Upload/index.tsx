import React, { useState } from 'react';
import { useMutation, UPLOAD } from '@foody/graphql';
import { Button } from '../../Button';
import { Row } from '../../Grid/Row';
import { Column } from '../../Grid/Column';
import useFoodImageRecognition from '../../../hooks/useFoodImageRecognition';

const SearchUpload = () => {
  const [skipRecognitionQuery, setSkipRecognitionQuery] = useState(true);
  const [imageRecognitionUrl, setImageRecognitionUrl] = useState(null);
  const [file, setFile] = useState(null);

  const onError = (error: any): any => console.log(error);
  const onCompleted = (data: any): any => {
    // @ts-ignore
    setImageRecognitionUrl('localhost:1337' + data.upload.url);
    setSkipRecognitionQuery(false);
  };

  const { loading } = useFoodImageRecognition(
    imageRecognitionUrl,
    skipRecognitionQuery,
    (data: any): any => console.log(data)
  );

  const [upload] = useMutation(UPLOAD, {
    onError,
    onCompleted,
  });

  const uploadPicture = (): any => upload({ variables: { file: file, ref: 'Toto' } });

  const handleChangeFile = ({
    target: {
      files: [file],
    },
  }: any): void => setFile(file);

  return (
    <Row direction="row">
      <Column collapse customStyle={{ flex: 1 }}>
        <input type="file" onChange={handleChangeFile} />
      </Column>
      <Column customStyle={{ marginRight: -20 }}>
        <Button label="Rechercher" onPress={uploadPicture} />
      </Column>
    </Row>
  );
};

export default SearchUpload;
