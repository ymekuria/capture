const { ipcRenderer, desktopCapturer } = window.electron;
import { GET_SCREEN_SOURCES } from './types';

export const getUserScreens = () => async => dispatch => {

    let sources = await desktopCapturer.getSources({types: ['window', 'screen']});
    console.log('sources: ', sources);

    dispatch({ type: GET_SCREEN_SOURCES, payload: sources });

};
