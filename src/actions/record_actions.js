import { GET_SCREEN_SOURCES } from './types';
import { asyncToPromise } from '../utils/utils'
const { ipcRenderer, desktopCapturer } = window.electron;

export const getUserScreens = () => async dispatch => {

  let sources = await asyncToPromise(desktopCapturer.getSources, { types: ['window', 'screen'] } );

  dispatch({ type: GET_SCREEN_SOURCES, payload: sources });

};
