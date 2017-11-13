import { SELECTED_SCREEN_SOURCE } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case SELECTED_SCREEN_SOURCE:
      return action.payload;
    default:
      return state;
  }
};
