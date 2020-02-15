import gql from 'graphql-tag';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-apollo';

export const FOOD_IMAGE_RECOGNITION = gql`
  query foodImageRecognition($image: String!) {
    foodImageRecognition(image: $image) {
      name
    }
  }
`;

export const useFoodImageRecognition = (
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
