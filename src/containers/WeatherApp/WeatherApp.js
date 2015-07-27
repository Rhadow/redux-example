import React, { Component } from 'react';
import WeatherDisplayer from '../../components/WeatherDisplayer/WeatherDisplayer';
import WeatherFetcher from '../../components/WeatherFetcher/WeatherFetcher';
import WeatherMap from '../../components/WeatherMap/WeatherMap';
import { bindActionCreators } from 'redux';
import { Connector } from 'redux/react';
import * as weatherActions from '../../actions/weatherActions';

class WeatherApp extends Component {
	renderChild({ info, mapOptions, isLoading, dispatch }) {
		const actions = bindActionCreators(weatherActions, dispatch);
		return (
			<div>
			    <WeatherFetcher actions={actions} />
			    <WeatherDisplayer
			        city={info.city}
			        temp={info.temp}
			        imageId={info.imageId}
			        loading={isLoading} />
			    <WeatherMap
			        mapOptions={mapOptions}
			        actions={actions} />
			</div>
		);
	}
	render() {
		return (
			<Connector select={state => { return state.weatherData }}>
			    {this.renderChild}
			</Connector>
		);
	}
}

export default WeatherApp;
