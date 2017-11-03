import React, { Component } from 'react';
const { desktopCapturer, ipcRenderer } = window.electron;


class HomeScreen extends Component {
	componentDidMount() {
		console.log('test')
		// console.log('ipcRenderer: ',window.ipcRenderer);
			desktopCapturer.getSources({types: ['window', 'screen']}, (error, sources) => {
				if (error) throw error
				console.log('sources: ', sources);
		});
	}

	render() {

		return (
		<div>
			<div>HomeScreen</div>
			<div>HomeScreen</div>
		</div>
		);
	}
}

export default HomeScreen;
