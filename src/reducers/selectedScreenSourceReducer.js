import { SELECT_SCREEN_SOURCE } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case SELECT_SCREEN_SOURCE:
      return action.payload;
    default:
      return state;
  }
};
