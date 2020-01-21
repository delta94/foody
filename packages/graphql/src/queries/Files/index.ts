import gql from 'graphql-tag';

export const FILES = gql`
  query files($userId: ID!) {
    files(where: { id: $userId }) {
      name
      url
    }
  }
`;
