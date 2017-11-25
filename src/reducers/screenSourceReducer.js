import { GET_SCREEN_SOURCES } from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_SCREEN_SOURCES:
      return [ ...action.payload ];
    default:
      return state;
  }
};
