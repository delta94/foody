import gql from 'graphql-tag';

export const UPDATE_USER_PANTRIES = gql`
  mutation($userId: ID!, $pantries: JSON) {
    updateUser(input: { where: { id: $userId }, data: { pantries: $pantries } }) {
      user {
        pantries
      }
    }
  }
`;
