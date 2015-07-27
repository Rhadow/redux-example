import './_WeatherFetcher';
import React, { Component, PropTypes } from 'react';

class WeatherFetcher extends Component {
	static propTypes = {
		actions: PropTypes.object.isRequired
	}
	componentDidMount() {
		this.props.actions.getWeatherData('victoria');
	}
	onWeatherRequestSentHandler(e) {
		e.preventDefault();
		let city = React.findDOMNode(this.refs.city).value;
		this.props.actions.getWeatherData(city);
		React.findDOMNode(this.refs.city).value = '';
	}
	render() {
		return (
			<div>
			    <h3>Please enter a location or right click on the map to see the weather there: </h3>
			    City Name: <input ref="city"/>
			    <a
			        className="btn"
			        onClick={this.onWeatherRequestSentHandler.bind(this)}>
			        Get weather data
			    </a>
			</div>
		);
	}
}

export default WeatherFetcher;
