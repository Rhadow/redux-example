import './_App';

import React, { Component } from 'react';
import WeatherApp from '../WeatherApp/WeatherApp';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from '../../stores';

const redux = createRedux(stores);


class App extends Component {
	render() {
		return (
			<Provider redux={redux}>
			    {() => <WeatherApp />}
			</Provider>
		);
	}
}

export default App;
