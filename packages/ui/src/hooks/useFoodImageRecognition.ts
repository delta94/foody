import { FOOD_IMAGE_RECOGNITION, useQuery } from '@foody/graphql';
import { useState, useEffect } from 'react';

const useFoodImageRecognition = (
  url: null | string,
  skipContainer: boolean = true,
  onCompleted: Function,
  onError?: Function
) => {
  const [skip, setSkip] = useState(true);
  const { data, error, loading } = useQuery(FOOD_IMAGE_RECOGNITION, {
    variables: { image: url },
    skip,
    onCompleted: (data: any) => {
      setSkip(true);
      onCompleted(data);
    },
    onError: () => {
      setSkip(true);
      onError && onError();
    },
  });

  useEffect(() => setSkip(skipContainer));

  return {
    data,
    error,
    loading,
  };
};

export default useFoodImageRecognition;
