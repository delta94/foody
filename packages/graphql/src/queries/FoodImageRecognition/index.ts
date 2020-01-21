import gql from 'graphql-tag';

export const FOOD_IMAGE_RECOGNITION = gql`
  query foodImageRecognition($image: String!) {
    foodImageRecognition(image: $image) {
      name
    }
  }
`;
