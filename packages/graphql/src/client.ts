import 'cross-fetch/polyfill';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from 'apollo-link-context';

const authLink = setContext((_, { headers }) => {
  const storage = localStorage.getItem('state');
  const state: Record<string, any> = storage ? JSON.parse(storage) : {};

  return {
    headers: {
      ...headers,
      authorization: state.app.token ? `Bearer ${state.app.token}` : '',
    },
  };
});
const uploadLink = createUploadLink({ uri: process.env.API_GRAPHQL_URL });
const link = ApolloLink.from([authLink, uploadLink]);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const createApolloClient = (cache = {}) =>
  new ApolloClient({
    link,
    cache: new InMemoryCache().restore(cache),
  });

export const apolloClient = createApolloClient();
