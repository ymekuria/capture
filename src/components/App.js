import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NavBar from './NavBar';
import SourcesScreen from '../screens/SourcesScreen';
import RecordScreen from '../screens/RecordScreen';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <div>
            <Route exact path="/modal" />
            <Route exact path="/" component={SourcesScreen} />
            <Route exact path="/record" component={RecordScreen} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
