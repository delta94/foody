import * as types from './types';

const initialState: types.AppState = {
  isLoading: true,
  jwt: null,
  isConnected: false,
};

const appReducer = (state: types.AppState = initialState, action: any): types.AppState => {
  switch (action.type) {
    case types.APP_INIT:
      return state;
    case types.APP_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case types.APP_LOADED:
      return {
        ...state,
        isLoading: false,
      };
    case types.RECEIVE_JWT:
      return {
        ...state,
        jwt: action.jwt,
        isConnected: true,
      };
    case types.LOGOUT:
      return {
        ...state,
        jwt: initialState.jwt,
        isConnected: false,
      };
    default:
      return state;
  }
};

export default appReducer;
