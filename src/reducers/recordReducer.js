import { RECORD_START } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.payload) {
    case RECORD_START:
      return { recording: true };
    default:
      return state;
  }
};
