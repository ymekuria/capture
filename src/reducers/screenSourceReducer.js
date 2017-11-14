import { GET_SCREEN_SOURCES } from '../actions/types';

export default (state = [], action) => {
  console.log('action gss ', action)
  switch (action.type) {
    case GET_SCREEN_SOURCES:
      return action.payload;
    default:
      return state;
  }
};
