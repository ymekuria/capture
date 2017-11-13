import { GET_SCREEN_SOURCES } from './types';
import { asyncToPromise } from '../utils/utils';
const electron = window.electron;
const { desktopCapturer } = electron;

export const getUserScreens = () => async dispatch => {
  let sources = await asyncToPromise(desktopCapturer.getSources, {
    types: ['window', 'screen']
  });
  console.log('sources, ', sources);

  dispatch({ type: GET_SCREEN_SOURCES, payload: sources });
};
