import React, { useState } from 'react';
import { useMutation, UPLOAD, Mutation } from '@foody/graphql';
import { Button } from '../../Button';
import { Row } from '../../Grid/Row';
import { Column } from '../../Grid/Column';
import { useFoodImageRecognition } from '@foody/graphql';
import { SearchPictureProps } from '../Url';

const SearchUpload: React.FC<SearchPictureProps> = ({ onSearch, onResults }) => {
  const [skipRecognitionQuery, setSkipRecognitionQuery] = useState<boolean>(true);
  const [imageRecognitionUrl, setImageRecognitionUrl] = useState<string | null>(null);
  const [file, setFile] = useState(null);

  const onError = (error: any): void => console.log(error);
  const onCompleted = ({ upload }: Mutation): void => {
    const imageUploadUrl = process.env.REACT_APP_API_URL + upload.url;
    setImageRecognitionUrl(imageUploadUrl);
    onSearch(imageUploadUrl);
    setSkipRecognitionQuery(false);
  };

  const imageRecognition = useFoodImageRecognition(
    imageRecognitionUrl,
    skipRecognitionQuery,
    (data: any): any => onResults(data.foodImageRecognition)
  );

  const [upload, uploadMutation] = useMutation(UPLOAD, {
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
        <Row>
          <Button
            label="Rechercher"
            onPress={uploadPicture}
            loading={uploadMutation.loading || imageRecognition.loading}
          />
        </Row>
      </Column>
    </Row>
  );
};

export default SearchUpload;
