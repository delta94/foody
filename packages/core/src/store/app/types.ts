export interface AppState {
  isLoading: boolean;
  jwt: null | string;
  isConnected: boolean;
  modalRecipeIsOpen: boolean;
  recipe: any;
}

export interface Action {
  type: string;
}

export const APP_INIT: string = 'APP_INIT';
export const APP_LOADING: string = 'APP_LOADING';
export const APP_LOADED: string = 'APP_LOADED';

export const LOGIN: string = 'LOGIN';
export const RECEIVE_JWT: string = 'RECEIVE_JWT';
export const LOGOUT: string = 'LOGOUT';

export const LOAD_RECIPE: string = 'LOAD_RECIPE';
