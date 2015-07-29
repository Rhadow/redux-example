// Styles
import './_App';

// Components
import React, { Component } from 'react';
import WeatherApp from '../WeatherApp/WeatherApp';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../../reducers';
import { promiseMiddleware } from '../../middlewares';

//DevTools
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

const reducer = combineReducers(reducers);
const finalCreateStore = applyMiddleware(promiseMiddleware)(createStore);
// const finalCreateStore = compose(
// 	applyMiddleware(promiseMiddleware),
// 	devTools(),
// 	persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
// 	createStore
// );
const store = finalCreateStore(reducer);

class App extends Component {
	render() {
		return (
			<div>
				<Provider store={store}>
				    {() => <WeatherApp />}
				</Provider>
				{/*<DebugPanel top right bottom>
				    <DevTools
				        store={store}
				        monitor={LogMonitor} />
				</DebugPanel>*/}
			</div>
		);
	}
}

export default App;
