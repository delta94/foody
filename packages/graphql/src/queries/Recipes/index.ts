import gql from 'graphql-tag';

export const RECIPES = gql`
  query recipes($userId: ID, $ingredients: String!) {
    recipes(userId: $userId, ingredients: $ingredients) {
      label
      image
      uri
      url
      source
    }
  }
`;
