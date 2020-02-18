import gql from 'graphql-tag';
import { useMutation } from 'react-apollo';
import { ME } from '../../queries';
import { Query } from '../../types';

export const UPDATE_USER_PANTRIES = gql`
  mutation($userId: ID!, $pantries: JSON) {
    updateUser(input: { where: { id: $userId }, data: { pantries: $pantries } }) {
      user {
        pantries
      }
    }
  }
`;

export const useUpdatePantries = () => {
  const [updatePantries] = useMutation(UPDATE_USER_PANTRIES, {
    update: (cache, { data }) => {
      const query: Query | null = cache.readQuery({
        query: ME,
      });
      const userMe = query?.userMe;

      if (userMe) {
        cache.writeQuery({
          query: ME,
          data: {
            userMe: {
              ...userMe,
              pantries: data.updateUser.user.pantries,
            },
          },
        });
      }
    },
  });

  return updatePantries;
};
