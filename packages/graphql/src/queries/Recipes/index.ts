import gql from 'graphql-tag';

export const RECIPES = gql`
  query recipes($ingredients: String!) {
    recipes(ingredients: $ingredients) {
      label
      image
      uri
      url
      source
    }
  }
`;
