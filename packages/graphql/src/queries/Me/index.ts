import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';

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

export const useMe = (params?: any = {}) => {
  const { data, error, loading } = useQuery(ME, params);

  return {
    data,
    error,
    loading,
  };
};
