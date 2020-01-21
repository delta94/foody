import gql from 'graphql-tag';

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
