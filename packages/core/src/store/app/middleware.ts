import * as types from './types';
import * as appActions from './actions';

const handleAppInit = (store: any): any => {
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

const appMiddleware = (store: any) => (next: any) => (action: () => any): any => {
  next(action);

  // @ts-ignore
  switch (action.type) {
    case types.APP_INIT:
      // @ts-ignore
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
