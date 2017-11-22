import { SELECT_SCREEN_SOURCE, GET_MEDIA_STREAM } from '../actions/types';

export default (state = {}, action) => {
  console.log('screen source in reducer: ', action.payload);
  switch (action.type) {
    case SELECT_SCREEN_SOURCE:
      return action.payload;
    case GET_MEDIA_STREAM:
      return action.payload;
    default:
      return state;
  }
};
