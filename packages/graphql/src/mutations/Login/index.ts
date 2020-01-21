import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
      user {
        id
        username
        pantries
        favoris
      }
    }
  }
`;
