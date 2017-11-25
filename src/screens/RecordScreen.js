import React, { Component } from 'react';
import { connect } from 'react-redux';
import { recordStream, stopRecording } from '../actions';
const electron = window.electron;
const { ipcRenderer } = electron;

class RecordScreen extends Component {
  state = {
    videoSource: null
  };

  // rerendering once the videoSource blob is created
  componentDidMount() {
    this.setState({
      videoSource: window.URL.createObjectURL(this.props.mediaStream)
    });

    // creating a recorder instance of the stream
    // this.recorder = new MediaRecorder(this.props.selectedScreenSource);
  }

  onRecordPress = () => {
    this.props.recordStream(this.props.mediaStream);
  };

  onStopPress = () => {
    this.props.stopRecording(this.props.history);
  };

  render() {
    return (
      <div>
        <video src={this.state.videoSource} autoPlay="true" controls />
        <button className="btn" onClick={() => this.props.history.push('/')}>
          back
        </button>
        <button className="btn" onClick={this.onRecordPress}>
          record
        </button>
        <button className="btn" onClick={this.onStopPress}>
          stop
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ mediaStream }) => {
  return { mediaStream };
};

export default connect(mapStateToProps, { recordStream, stopRecording })(
  RecordScreen
);
