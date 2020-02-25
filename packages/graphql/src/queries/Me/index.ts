import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';

interface QueryParams {
  onError?: () => void;
  onCompleted?: () => void;
  skip?: boolean;
}

export const ME = gql`
  {
    userMe {
      id
      username
      pantries
      favoris
    }
  }
`;

export const useMe = (params: QueryParams = {}) => {
  const { data, error, loading } = useQuery(ME, params);

  return {
    data,
    error,
    loading,
  };
};
