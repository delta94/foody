import * as types from './types';

export const appInit = (): types.Action => ({
  type: types.APP_INIT,
});

export const appLoading = (): types.Action => ({
  type: types.APP_LOADING,
});

export const appLoaded = (): types.Action => ({
  type: types.APP_LOADED,
});

export const receiveJwt = (jwt: string): types.ReceiveJwtAction => ({
  type: types.RECEIVE_JWT,
  jwt,
});

export const logout = (): types.Action => ({
  type: types.LOGOUT,
});
