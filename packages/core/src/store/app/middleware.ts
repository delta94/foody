import * as types from './types';
import * as appActions from './actions';
import { Store } from '../types';

const handleAppInit = (store: types.Store): any => {
  const { app } = store.getState();

  switch (true) {
    case app.user !== null:
      console.log('login');
      setTimeout(() => store.dispatch(appActions.appLoaded()));
      break;
    case app.user === null:
      console.log('logout');
      setTimeout(() => store.dispatch(appActions.appLoaded()));
      break;
    default:
      break;
  }
};

const appMiddleware = (store: Record<string, any>) => (next: Record<string, any>) => (
  action: () => any
): Store => {
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
    case types.LOGIN_SUCCESS:
      console.log('login success');
      break;
    default:
      return store;
  }

  return store;
};

export default appMiddleware;
