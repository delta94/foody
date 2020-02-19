import * as types from './types';
import * as appActions from './actions';
import { MiddlewareAPI, Dispatch, Action } from 'redux';

const handleAppInit = (store: MiddlewareAPI<any>): void => {
  const { app } = store.getState();

  switch (true) {
    case app.jwt !== null:
      console.log('logged');
      store.dispatch(appActions.appLoaded());
      break;
    case app.jwt === null:
      console.log('notlogged');
      store.dispatch(appActions.appLoaded());
      break;
    default:
      break;
  }
};

interface EffectAction extends Action {
  effect<T>(action: T): void;
}

const appMiddleware = (store: MiddlewareAPI<any>) => (next: Dispatch<EffectAction>) => (
  action: EffectAction
): MiddlewareAPI<any> => {
  next(action);

  switch (action.type) {
    case types.APP_INIT:
      handleAppInit(store);
      break;
    case types.APP_LOADING:
      console.log('app loading');
      break;
    case types.APP_LOADED:
      console.log('app loaded');
      break;
    default:
      return store;
  }

  return store;
};

export default appMiddleware;
