import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NavBar from './NavBar';
import SourcesScreen from '../screens/SourcesScreen';
import RecordScreen from '../screens/RecordScreen';
import DownloadScreen from '../screens/DownloadScreen';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <div>
            <Route exact path="/" component={SourcesScreen} />
            <Route exact path="/record" component={RecordScreen} />
            <Route exact path="/download" component={DownloadScreen} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
