import gql from 'graphql-tag';

export const RECIPES = gql`
  query recipes($ingredients: String!) {
    recipes(ingredients: $ingredients) {
      title
      href
      ingredients
      thumbnail
    }
  }
`;
