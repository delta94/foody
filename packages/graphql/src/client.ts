import 'cross-fetch/polyfill';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from 'apollo-link-context';
import { persistCache } from 'apollo-cache-persist';

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
const uploadLink = createUploadLink({ uri: 'http://localhost:1337/graphql' });
const link = ApolloLink.from([authLink, uploadLink]);

export const createApolloClient = (cache = {}) => {
  const restoreCache = new InMemoryCache().restore(cache);

  persistCache({
    cache: restoreCache,
    storage: window.localStorage,
  });

  return new ApolloClient({
    link,
    cache: restoreCache,
  });
};
