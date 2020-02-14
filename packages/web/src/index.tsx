import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { ApolloProvider, createApolloClient } from '@foody/graphql';

const init = async () => {
  const apolloClient = await createApolloClient(process.env.REACT_APP_API_GRAPHQL_URL);

  if (apolloClient) {
    const ApolloApp = () => (
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    );

    ReactDOM.render(<ApolloApp />, document.getElementById('root'));
  }
};

init();
