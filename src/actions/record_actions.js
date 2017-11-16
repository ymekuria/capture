import { GET_SCREEN_SOURCES, SELECTED_SCREEN_SOURCE } from './types';
import { asyncToPromise } from '../utils/utils';
const electron = window.electron;
const { desktopCapturer } = electron;

export const getUserScreens = () => async dispatch => {
  let sources = await asyncToPromise(desktopCapturer.getSources, {
    types: ['audio', 'window', 'screen']
  });

  dispatch({ type: GET_SCREEN_SOURCES, payload: { ...sources } });
};

export const selectScreenSource = (source, history) => async dispatch => {
  // this specifies the screen source the user wants to record using the via the sourc.id
  const constraints = {
    video: {
      mandatory: {
        chromeMediaSource: 'desktop',
        chromeMediaSourceId: source.id
      }
    },
    audio: false
  };

  try {
    // getting the video stream then adding the audio track seperatly to it
    // currently, the api doesn't support capturing both the audio and video streams on osx
    let videoStream = await navigator.mediaDevices.getUserMedia(constraints);
    let audioStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });

    let audioTrack = audioStream.getAudioTracks()[0];

    videoStream.addTrack(audioTrack);

    dispatch({ type: SELECTED_SCREEN_SOURCE, payload: videoStream });
    history.push('/videos');
  } catch (e) {
    console.log('error: ', e);
  }
};
