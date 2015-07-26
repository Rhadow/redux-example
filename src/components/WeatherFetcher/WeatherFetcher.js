import './_WeatherFetcher';
import React, { Component, PropTypes } from 'react';

class WeatherFetcher extends Component {
	static propTypes = {
		actions: PropTypes.object.isRequired
	}
	onFakeRequestSentHandler(e) {
		e.preventDefault();
		let city = React.findDOMNode(this.refs.city).value;
		this.props.actions.getFakeWeatherData(city);
		React.findDOMNode(this.refs.city).value = '';
	}
	onRealRequestSentHandler(e) {
		e.preventDefault();
		let city = React.findDOMNode(this.refs.city).value;
		this.props.actions.getWeatherData(city);
		React.findDOMNode(this.refs.city).value = '';
	}
	render() {
		return (
			<div>
			    Please enter a city: <input ref="city"/>
			    <a onClick={this.onFakeRequestSentHandler.bind(this)}>Get fake weather data</a>
			    <a onClick={this.onRealRequestSentHandler.bind(this)}>Get real weather data</a>
			</div>
		);
	}
}

export default WeatherFetcher;
