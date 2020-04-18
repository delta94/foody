import React, { useState } from 'react';
import { useMutation, UPLOAD, Mutation } from '@foody/graphql';
import { Button } from '../../Button';
import { Row } from '../../Grid/Row';
import { Column } from '../../Grid/Column';
import { useFoodImageRecognition } from '@foody/graphql';
import { SearchPictureProps } from '../Url';
import { Upload } from '../../Forms/Upload';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { Link } from '../../Link/index.web';
import { Spacer } from '../../Spacer';
import { CameraIcon } from '../../Icon/Camera';

const MEDIA_DEVICS_SETTINGS = {
  audio: false,
  video: true
};

interface Props extends SearchPictureProps {
  onSearch: any;
  onResults: any;
  onSetStream: any;
  onTakePhoto: any;
}

const SearchUpload: React.FC<Props> = ({
  onSearch,
  onResults,
  onSetStream,
  onTakePhoto
}) => {
  const [skipRecognitionQuery, setSkipRecognitionQuery] = useState<boolean>(
    true
  );
  const [imageRecognitionUrl, setImageRecognitionUrl] = useState<string | null>(
    null
  );
  const [imageCapture, setImageCapture] = useState<any>(null);
  const [file, setFile] = useState(null);
  const [userHasCamera, setUserHasCamera] = useState(false);

  const getMediaDevices = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia(
        MEDIA_DEVICS_SETTINGS
      );
      onSetStream(mediaStream);

      const mediaStreamTrack = mediaStream.getVideoTracks()[0];
      // @ts-ignore
      setImageCapture(new ImageCapture(mediaStreamTrack));
    } catch (error) {
      console.log(error);
    }
  };

  const takePhoto = async (): Promise<any> => {
    const blob: Blob = await imageCapture.takePhoto();
    const photo = URL.createObjectURL(blob);
    onTakePhoto(photo);
    onSetStream(null);
    uploadPicture(blob);
  };

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
    onCompleted
  });

  const uploadPicture = (photo: Blob | null = null): any =>
    upload({ variables: { file: photo ?? file, ref: 'Toto' } });
  const handleChangeFile = ({
    target: {
      files: [file]
    }
  }: any): void => setFile(file);

  const { isMobileAndTablet } = useMediaQuery();

  navigator.mediaDevices.enumerateDevices().then((devices) => {
    devices.forEach((device) => {
      if (device.kind === 'videoinput') {
        setUserHasCamera(true);
      }
    });
  });

  return (
    <>
      <Row
        customStyle={{ flexDirection: isMobileAndTablet ? 'column' : 'row' }}>
        <Column collapse customStyle={{ flex: 1 }}>
          <Upload handleChangeFile={handleChangeFile} />
          {isMobileAndTablet && <Spacer height={20} />}
        </Column>
        <Column
          customStyle={{
            marginRight: isMobileAndTablet ? 0 : -20,
            paddingHorizontal: isMobileAndTablet ? 0 : 20
          }}>
          <Row>
            <Button
              label="Rechercher"
              onPress={() => uploadPicture()}
              loading={uploadMutation.loading || imageRecognition.loading}
            />
          </Row>
        </Column>
      </Row>
      {userHasCamera && (
        <>
          <Spacer height={20} />
          <Row direction="row">
            <CameraIcon />
            <Spacer width={10} />
            {imageCapture ? (
              <Link label="Capturer mon aliment" onPress={takePhoto} />
            ) : (
              <Link label="Prendre une photo" onPress={getMediaDevices} />
            )}
          </Row>
        </>
      )}
    </>
  );
};

export default SearchUpload;
