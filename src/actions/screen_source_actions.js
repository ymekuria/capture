import { GET_SCREEN_SOURCES, SELECT_SCREEN_SOURCE } from './types';
import { asyncToPromise } from '../utils/utils';
const electron = window.electron;
const { desktopCapturer } = electron;

export const getUserScreens = () => async dispatch => {
  let sources = await asyncToPromise(desktopCapturer.getSources, {
    types: ['audio', 'window', 'screen']
  });

  dispatch({ type: GET_SCREEN_SOURCES, payload: sources });
};

export const selectScreenSource = source => {
  return { type: SELECT_SCREEN_SOURCE, payload: source };
};
