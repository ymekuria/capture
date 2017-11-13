import { GET_SCREEN_SOURCES, SELECTED_SCREEN_SOURCE } from './types';
import { asyncToPromise } from '../utils/utils';
const electron = window.electron;
const { desktopCapturer } = electron;

export const getUserScreens = () => async dispatch => {
  let sources = await asyncToPromise(desktopCapturer.getSources, {
    types: ['window', 'screen']
  });

  dispatch({ type: GET_SCREEN_SOURCES, payload: sources });
};

export const selectScreenSource = source => {
  return { type: SELECTED_SCREEN_SOURCE, payload: { ...source } };
};
