import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';

const ME = gql`
  {
    userMe {
      id
      username
      pantries
      favoris
    }
  }
`;

export const useMe = () => {
  const { data, error, loading } = useQuery(ME);

  return {
    data,
    error,
    loading,
  };
};
