import gql from 'graphql-tag';

export const RECIPES = gql`
  query recipes($userId: ID, $ingredients: String!) {
    recipes(userId: $userId, ingredients: $ingredients) {
      uri
      label
      image
      source
      url
      yield
      calories
      totalWeight
      totalTime
      cautions
      ingredientLines
      ingredients {
        text
        weight
      }
    }
  }
`;
