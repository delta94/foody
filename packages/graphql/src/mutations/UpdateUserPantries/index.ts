import gql from 'graphql-tag';
import { useMutation } from 'react-apollo';
import { ME } from '../../queries';

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
      const { userMe }: any = cache.readQuery({
        query: ME,
      });

      cache.writeQuery({
        query: ME,
        data: {
          userMe: {
            ...userMe,
            pantries: data.updateUser.user.pantries,
          },
        },
      });
    },
  });

  return updatePantries;
};
