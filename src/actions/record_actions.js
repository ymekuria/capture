import { GET_MEDIA_STREAM, RECORD_START, RECORD_STOP } from './types';
const electron = window.electron;
const { ipcRenderer } = electron;

let mediaStream;
let recordedChunks = [];
let recorder;

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
    recordedChunks.push(event.data);
  };

  recorder.start(1500);

  dispatch({ type: RECORD_START });
  console.log('recordedChunks in record', recordedChunks);
};

export const stopRecording = history => async dispatch => {
  recorder.stop();
  mediaStream.getTracks().forEach(stream => stream.stop());

  const recordBlob = new Blob(recordedChunks, { type: 'video/webm' });

  // TODO: Add user flow to view recording and save to hard drive
  dispatch({ type: RECORD_STOP, payload: recordBlob });
  history.push('/download');
};
