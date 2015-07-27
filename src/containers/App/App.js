import './_App';

import React, { Component } from 'react';
import WeatherApp from '../WeatherApp/WeatherApp';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../../reducers';
import { promiseMiddleware } from '../../middlewares';

const reducer = combineReducers(reducers);
const finalCreateStore = applyMiddleware(promiseMiddleware)(createStore);
const store = finalCreateStore(reducer);

class App extends Component {
	render() {
		return (
			<Provider store={store}>
			    {() => <WeatherApp />}
			</Provider>
		);
	}
}

export default App;
