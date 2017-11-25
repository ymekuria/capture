import { GET_MEDIA_STREAM } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MEDIA_STREAM:
      return action.payload;
    default:
      return state;
  }
};
