import './_WeatherFetcher';
import React, { Component, PropTypes } from 'react';

class WeatherFetcher extends Component {
	static propTypes = {
		actions: PropTypes.object.isRequired
	}
	componentDidMount() {
		this.props.actions.getWeatherData('victoria');
	}
	_onWeatherRequestSentHandler(e) {
		e.preventDefault();
		let city = React.findDOMNode(this.refs.city).value;
		this.props.actions.getWeatherData(city);
		React.findDOMNode(this.refs.city).value = '';
	}
	_onKeyUpHandler(e) {
		if (e.keyCode === 13) {
			this._onWeatherRequestSentHandler(e);
		}
	}
	render() {
		return (
			<div className="weather-fetcher">
			    <h3 className="instruction">Please enter a location or click on the map to see the weather there: </h3>
			    City Name: <input ref="city" onKeyUp={this._onKeyUpHandler.bind(this)}/>
			    <a
			        className="btn"
			        onClick={this._onWeatherRequestSentHandler.bind(this)}>
			        Search
			    </a>
			</div>
		);
	}
}

export default WeatherFetcher;
