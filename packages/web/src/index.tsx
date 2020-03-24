import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { ApolloProvider, createApolloClient } from '@foody/graphql';
import { Provider, initializeWebStore } from '@foody/core';
import * as serviceWorker from './serviceWorker';

const init = async () => {
  const apolloClient = await createApolloClient(
    process.env.REACT_APP_API_GRAPHQL_URL
  );
  const reduxStore = initializeWebStore();

  if (apolloClient) {
    const ApolloApp = () => (
      <ApolloProvider client={apolloClient}>
        <Provider store={reduxStore}>
          <App />
        </Provider>
      </ApolloProvider>
    );

    ReactDOM.render(<ApolloApp />, document.getElementById('root'));

    if (serviceWorker.isPushNotificationSupported()) {
      serviceWorker.register();
    }
  }
};

init();
