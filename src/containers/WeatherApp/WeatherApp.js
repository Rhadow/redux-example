import React, { Component } from 'react';
import WeatherDisplayer from '../../components/WeatherDisplayer/WeatherDisplayer';
import WeatherFetcher from '../../components/WeatherFetcher/WeatherFetcher';
import { bindActionCreators } from 'redux';
import { Connector } from 'redux/react';
import * as weatherActions from '../../actions/weatherActions';

class WeatherApp extends Component {
	render() {
		return (
			<Connector select={state => { return state.weather }}>
			    {this.renderChild}
			</Connector>
		);
	}
	renderChild({ weather, dispatch }) {
		const actions = bindActionCreators(weatherActions, dispatch);
		return (
			<div>
			    <WeatherFetcher {...actions}/>
			    <WeatherDisplayer
			        city={weather.city}
			        temp={weather.temp} />
			</div>
		);
	}
}

export default WeatherApp;
