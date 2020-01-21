import gql from 'graphql-tag';

export const UPLOAD = gql`
  mutation($file: Upload!, $ref: String) {
    upload(file: $file, ref: $ref) {
      name
      url
    }
  }
`;
