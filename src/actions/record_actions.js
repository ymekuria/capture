import { GET_SCREEN_SOURCES, SELECTED_SCREEN_SOURCE } from './types';
import { asyncToPromise } from '../utils/utils';
const electron = window.electron;
const { desktopCapturer } = electron;

export const getUserScreens = () => async dispatch => {
  let sources = await asyncToPromise(desktopCapturer.getSources, {
    types: ['window', 'screen']
  });

  dispatch({ type: GET_SCREEN_SOURCES, payload: { ...sources } });
};

export const selectScreenSource = (source, history) => async dispatch => {
  //   navigator.webkitGetUserMedia({
  //      audio: true,
  //      video: {
  //         mandatory: {
  //            chromeMediaSource: 'desktop',
  //            chromeMediaSourceId: sources.id,
  //            minWidth: 1280,
  //            maxWidth: 1280,
  //            minHeight: 720,
  //            maxHeight: 720
  //         }
  //      }
  //   }, handleStream, () => {
//   console.log('getUserMedia() failed.')
// })
const options = {
     audio: false,
     video: {
        mandatory: {
           chromeMediaSource: 'desktop',
           chromeMediaSourceId: source.id,
           minWidth: 600,
           maxWidth: 600,
           minHeight: 420,
           maxHeight: 420
        }
     }
  };
  try {
    let stream = await navigator.mediaDevices.getUserMedia(options);
    console.log('stream: ', stream);
    dispatch({ type: SELECTED_SCREEN_SOURCE, payload: stream });
    history.push('/videos');

  } catch (e) {
    console.log('error: ', e);
  }



};
