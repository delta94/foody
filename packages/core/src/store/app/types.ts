export interface AppState {
  isLoading: boolean;
  jwt: null | string;
  isConnected: boolean;
  modalRecipeIsOpen: boolean;
  recipe: any;
  search: {
    latest: {
      image: string;
      data: any[];
      ingredients: string[];
      recipes: null | any[];
    };
    pantries: {
      ingredients: string[];
      recipes: null | any[];
    };
  };
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

export const SEARCH_SET_IMAGE = 'SEARCH_SET_IMAGE';
export const SEARCH_SET_INGREDIENTS = 'SEARCH_SET_INGREDIENTS';
export const SEARCH_SET_RECIPES = 'SEARCH_SET_RECIPES';
export const SEARCH_SET_DATA = 'SEARCH_SET_DATA';
export const SEARCH_CLEAR_RECIPES = 'SEARCH_CLEAR_RECIPES';
export const SEARCH_CLEAR_LATEST = 'SEARCH_CLEAR_LATEST';
