import './_WeatherMap';
import React, { Component, PropTypes, findDOMNode } from 'react';

class WeatherMap extends Component {
	static propTypes = {
		mapOptions: PropTypes.object.isRequired,
		actions: PropTypes.object.isRequired
	}
	componentDidMount() {
        const { mapOptions } = this.props;
        let map = new google.maps.Map(findDOMNode(this.refs.weatherMap), mapOptions);
        google.maps.event.addListener(map, "rightclick", this._onMapRightClicked.bind(this));
	}
	_onMapRightClicked(event) {
		const { actions } = this.props;
		let lat = event.latLng.lat(),
	        lng = event.latLng.lng();
	    actions.getWeatherData(lat, lng);
	}
	render() {
		return (
			<div ref="weatherMap" className="weather-map"></div>
		);
	}
}

export default WeatherMap;
