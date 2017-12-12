import { GET_MEDIA_STREAM, RECORD_START, RECORD_STOP } from './types';
const electron = window.electron;
const { ipcRenderer } = electron;

let mediaStream;
let recordedChunks = [];
let recorder;
let recordBlob;

export const createMediaStream = (source, history) => async dispatch => {
  // this specifies the screen source the user wants to record using the the source.id
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
    mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
    let audioStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });

    let audioTrack = audioStream.getAudioTracks()[0];

    mediaStream.addTrack(audioTrack);

    dispatch({ type: GET_MEDIA_STREAM, payload: mediaStream });
    history.push('/record');
  } catch (e) {
    console.log('error: ', e);
  }
};

export const recordStream = stream => async dispatch => {
  recorder = new MediaRecorder(stream);

  recorder.ondataavailable = event => {
    console.log('event', event);
    recordedChunks.push(event.data);
    recordBlob = event.data;
    console.log('recordBlob in on data ava', recordBlob);
  };

  recorder.start();

  dispatch({ type: RECORD_START });
  console.log('recordedChunks in record', recordedChunks);
};

export const stopRecording = history => async dispatch => {
  recorder.stop();
  mediaStream.getVideoTracks()[0].stop();
  mediaStream.getAudioTracks()[0].stop();

  console.log('recordedChunks in stop', recordedChunks);
  console.log('recordBlob in stop', recordBlob);

  // console.log('fullBlob in stop:', fullBlob);

  // TODO: Add user flow to view recording and save to hard drive
  dispatch({ type: RECORD_STOP, payload: recordBlob });
  history.push('/download');
};
