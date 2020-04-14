import * as types from './types';

export const initialState: types.AppState = {
  isLoading: true,
  jwt: null,
  isConnected: false,
  modalRecipeIsOpen: false,
  recipe: null,
  search: {
    latest: {
      image: '/assets/images/placeholder/pic.jpg',
      data: [],
      ingredients: [],
      recipes: null
    },
    pantries: {
      ingredients: [],
      recipes: null
    }
  }
};

const appReducer = (
  state: types.AppState = initialState,
  action: any
): types.AppState => {
  switch (action.type) {
    case types.APP_INIT:
      return state;
    case types.APP_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case types.APP_LOADED:
      return {
        ...state,
        isLoading: false
      };
    case types.RECEIVE_JWT:
      return {
        ...state,
        jwt: action.jwt,
        isConnected: true
      };
    case types.LOGOUT:
      return {
        ...state,
        jwt: initialState.jwt,
        isConnected: false
      };
    case types.LOAD_RECIPE:
      return {
        ...state,
        modalRecipeIsOpen: !state.modalRecipeIsOpen,
        recipe: action.recipe
      };
    case types.SEARCH_SET_IMAGE:
      return {
        ...state,
        search: {
          ...state.search,
          [action.currentPath]: {
            ...state.search[action.currentPath],
            image: action.image
          }
        }
      };
    case types.SEARCH_SET_INGREDIENTS:
      return {
        ...state,
        search: {
          ...state.search,
          [action.currentPath]: {
            ...state.search[action.currentPath],
            ingredients: action.ingredients
          }
        }
      };
    case types.SEARCH_SET_RECIPES:
      return {
        ...state,
        search: {
          ...state.search,
          [action.currentPath]: {
            ...state.search[action.currentPath],
            recipes: action.recipes
          }
        }
      };
    case types.SEARCH_SET_DATA:
      return {
        ...state,
        search: {
          ...state.search,
          [action.currentPath]: {
            ...state.search[action.currentPath],
            data: action.data
          }
        }
      };
    case types.SEARCH_CLEAR_RECIPES:
      return {
        ...state,
        search: {
          ...state.search,
          [action.currentPath]: {
            ...state.search[action.currentPath],
            recipes: null
          }
        }
      };
    case types.SEARCH_CLEAR_LATEST:
      return {
        ...state,
        search: {
          ...state.search,
          latest: initialState.search.latest
        }
      };
    default:
      return state;
  }
};

export default appReducer;
