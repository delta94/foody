import gql from 'graphql-tag';
import { useMutation } from 'react-apollo';
import { ME } from '../../queries';
import { Query } from '../../types';

export const UPDATE_FAVORIS = gql`
  mutation($userId: ID!, $favoris: JSON) {
    updateUser(input: { where: { id: $userId }, data: { favoris: $favoris } }) {
      user {
        favoris
      }
    }
  }
`;

export const useUpdateFavoris = () => {
  const [updateFavoris] = useMutation(UPDATE_FAVORIS, {
    update: (cache, { data }) => {
      const query: Query | null = cache.readQuery({
        query: ME
      });
      const userMe = query?.userMe;

      if (userMe) {
        cache.writeQuery({
          query: ME,
          data: {
            userMe: {
              ...userMe,
              favoris: data.updateUser.user.favoris
            }
          }
        });
      }
    }
  });

  return updateFavoris;
};
