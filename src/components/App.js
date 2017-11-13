import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./NavBar";
import HomeScreen from "../screens/HomeScreen";
import RecordedVideosScreen from "../screens/RecordedVideosScreen";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<NavBar/>
					<Route exact path="/" component={HomeScreen} />
          <Route exact path="/videos" component={RecordedVideosScreen} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
