import './_WeatherDisplayer';
import React, { Component, PropTypes } from 'react';

class WeatherDisplayer extends Component {
	static propTypes = {
		city: PropTypes.string.isRequired,
		temp: PropTypes.number.isRequired
	}

	render() {
		const {city, temp} = this.props;
		return (
			<div>
			    The temperature of {city} is currently {temp}.
			</div>
		);
	}
}

export default WeatherDisplayer;
