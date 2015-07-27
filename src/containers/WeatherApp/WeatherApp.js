import './_WeatherApp';
import React, { Component } from 'react';
import WeatherDisplayer from '../../components/WeatherDisplayer/WeatherDisplayer';
import WeatherFetcher from '../../components/WeatherFetcher/WeatherFetcher';
import WeatherMap from '../../components/WeatherMap/WeatherMap';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import * as weatherActions from '../../actions/weatherActions';

class WeatherApp extends Component {
	renderChild({ info, mapOptions, isLoading, hasError, dispatch }) {
		const actions = bindActionCreators(weatherActions, dispatch);
		return (
			<div className="weather-app">
			    <div className="map-wrapper">
			        <WeatherMap
				        mapOptions={mapOptions}
				        actions={actions} />
			    </div>
			    <div className="control-panel">
			        <WeatherFetcher actions={actions} />
				    <WeatherDisplayer
				        city={info.city}
				        temp={info.temp}
				        imageId={info.imageId}
				        isLoading={isLoading}
				        hasError={hasError} />
			    </div>
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
