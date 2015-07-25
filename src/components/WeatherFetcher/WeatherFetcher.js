import './_WeatherFetcher';
import React, { Component, PropTypes } from 'react';

class WeatherFetcher extends Component {
	static propTypes = {
		getWeatherData: PropTypes.func.isRequired
	}
	onSendHandler(e) {
		e.preventDefault();
		let city = React.findDOMNode(this.refs.city).value;
		this.props.getWeatherData(city);
		React.findDOMNode(this.refs.city).value = '';
	}
	render() {
		return (
			<div>
			    Please enter a city: <input ref="city"/>
			    <a onClick={this.onSendHandler.bind(this)}>Send</a>
			</div>
		);
	}
}

export default WeatherFetcher;
