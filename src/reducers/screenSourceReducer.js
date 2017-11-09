import { GET_SCREEN_SOURCES } from './types'

export default (state = [], action) => {
  switch (action.type) {
    case GET_SCREEN_SOURCES:
      return [];
    default:
      return state;
  }
}
