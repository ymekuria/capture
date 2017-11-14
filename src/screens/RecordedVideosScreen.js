import React, { Component } from 'react';
import { connect } from 'react-redux';
const electron = window.electron;
const { desktopCapturer } = electron;

class RecordedVideosScreen extends Component {
  state = {
    videoSource: null
  };
  // rerendering once the videoSource blob is created
  componentDidMount() {
    this.setState({
      videSource: window.URL.createObjectURL(this.props.selectedScreenSource)
    });
  }

  render() {
    return (
      <div>
        <video src={this.state.videSource} />
        <button className="btn" onClick={() => this.props.history.push('/')}>
          back
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ selectedScreenSource }) => {
  return { selectedScreenSource };
};
export default connect(mapStateToProps)(RecordedVideosScreen);
