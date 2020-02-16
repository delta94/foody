import gql from 'graphql-tag';
import { useMutation } from 'react-apollo';
import { ME } from '../../queries';

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
      const { userMe }: any = cache.readQuery({
        query: ME,
      });

      cache.writeQuery({
        query: ME,
        data: {
          userMe: {
            ...userMe,
            favoris: data.updateUser.user.favoris,
          },
        },
      });
    },
  });

  return updateFavoris;
};
