// @flow
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from './localstorage';
import appReducer from './app/reducer';
import { appLoading, appInit } from './app/actions';
import { Store } from './types';
import { __DEV__ } from '../constants';
import appMiddleware from './app/middleware';

const logger = createLogger({
  level: 'info',
  collapsed: false,
  logger: console,
});

const reducers = combineReducers({
  app: appReducer,
});

const middlewares = [appMiddleware].filter(Boolean);

export const initializeWebStore = (): Store => {
  const persistedState = loadState();

  const store = createStore(
    reducers,
    persistedState,
    __DEV__
      ? composeWithDevTools(applyMiddleware(logger, ...middlewares))
      : applyMiddleware(...middlewares)
  );

  store.subscribe(() =>
    saveState({
      app: {
        ...store.getState().app,
      },
    })
  );
  store.dispatch(appLoading());
  store.dispatch(appInit());

  return store;
};
