import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NavBar from './NavBar';
import HomeScreen from '../screens/HomeScreen';
import RecordedVideosScreen from '../screens/RecordedVideosScreen';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <div style={{ backgroundColor: 'rgba(255, 255, 255, .2)' }}>
            <Route exact path="/modal" />
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/videos" component={RecordedVideosScreen} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
