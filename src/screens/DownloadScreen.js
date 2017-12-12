import React, { Component } from 'react';
import { connect } from 'react-redux';

// TODO: create a reusible component to render a mediastream, blob etc
class DownloadScreen extends Component {
  state = {
    videoSource: null
  };

  componentDidMount() {
    this.setState({
      videoSource: window.URL.createObjectURL(this.props.blob)
    });
  }

  render() {
    return (
      <div>
        {/* <a href={this.state.videoSource} download="test">
          Download Screen Caputre
        </a> */}
        <video src={this.state.videoSource} autoPlay="true" controls />
      </div>
    );
  }
}

const mapStateToProps = ({ recording: { blob } }) => {
  return { blob };
};

export default connect(mapStateToProps)(DownloadScreen);
