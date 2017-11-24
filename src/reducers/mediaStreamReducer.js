import { GET_MEDIA_STREAM } from '../actions/types';

export default (state = {}, action) => {
  switch (action.payload) {
    case GET_MEDIA_STREAM:
      return action.payload;
    default:
     return state;
  }
}
