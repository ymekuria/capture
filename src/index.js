import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route path ="/" comopnent={HomeScreen} />
			</Switch>
		</Router>
	</Provider>, 
	document.getElementById('root')
);

registerServiceWorker();
