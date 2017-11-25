import { SELECT_SCREEN_SOURCE } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_SCREEN_SOURCE:
      return { ...action.payload }
    default:
      return state;
  }
};
