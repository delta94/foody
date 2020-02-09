import { Store } from './types';

const loadState = (): any => {
  try {
    const serializedState = localStorage.getItem('state');

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (error) {
    return console.log(error);
  }
};

const saveState = (state: Store): any => {
  try {
    const serializedState = JSON.stringify(state);

    return localStorage.setItem('state', serializedState);
  } catch (error) {
    return console.log(error);
  }
};

export { loadState, saveState };
