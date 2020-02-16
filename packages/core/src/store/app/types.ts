import { User } from '../../interfaces';

export interface AppState {
  isLoading: boolean;
  user: null | any;
  jwt: null | string;
  isConnected: boolean;
}
export interface Action {
  type: string;
}
export interface ReceiveUserAction extends Action {
  jwt: string;
  user: User;
}

export const APP_INIT = 'APP_INIT';
export const APP_LOADING = 'APP_LOADING';
export const APP_LOADED = 'APP_LOADED';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const RECEIVE_USER = 'RECEIVE_USER';
export const LOGOUT = 'LOGOUT';
