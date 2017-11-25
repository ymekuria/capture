import { GET_MEDIA_STREAM } from './types';
const electron = window.electron;
const { ipcRenderer } = electron;

let recordedChunks = [];
let recorder;

export const createMediaStream = (source, history) => async dispatch => {
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

    dispatch({ type: GET_MEDIA_STREAM, payload: videoStream });
    history.push('/record');
  } catch (e) {
    console.log('error: ', e);
  }
};

export const recordStream = stream => async dispatch => {
  recorder = new MediaRecorder(stream);
  console.log('recorder', recorder);

  recorder.ondataavailable = event => {
    recordedChunks.push(event.data);
  };

  recorder.start();

  dispatch({ type: RECORD_START });
};

export const stopRecording = (recorder, recordedChunks) => async dispatch => {
  recorder.stop()
};
