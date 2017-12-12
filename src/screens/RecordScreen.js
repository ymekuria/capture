import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { recordStream, stopRecording } from '../actions';
const electron = window.electron;
const { ipcRenderer } = electron;

class RecordScreen extends Component {
  state = {
    videoSource: null
  };

  // rerendering once the videoSource url
  componentDidMount() {
    this.setState({
      videoSource: window.URL.createObjectURL(this.props.mediaStream)
    });
  }

  onRecordPress = () => {
    this.props.recordStream(this.props.mediaStream);
  };

  onStopPress = () => {
    this.props.stopRecording(this.props.history);
  };

  render() {
    return (
      <div style={styles.containerStyle}>
        <div style={styles.recordScreenstyle}>
          <video src={this.state.videoSource} autoPlay="true" controls />
        </div>
        <div style={styles.buttonContainerStyle}>
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
      </div>
    );
  }
}

const mapStateToProps = ({ mediaStream }) => {
  return { mediaStream };
};

const styles = {
  containerStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'spaceAround'
  },
  recordScreenstyle: {
    flex: 3
  },
  buttonContainerStyle: {
    flex: 1
  }
};

export default connect(mapStateToProps, { recordStream, stopRecording })(
  RecordScreen
);
