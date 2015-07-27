import './_WeatherMap';
import React, { Component, PropTypes, findDOMNode } from 'react';

class WeatherMap extends Component {
	constructor() {
		super();
		this._googleMap = undefined;
	}
	static propTypes = {
		mapOptions: PropTypes.object.isRequired,
		actions: PropTypes.object.isRequired
	}
	componentWillReceiveProps(nextProps) {
		if (JSON.stringify(nextProps.mapOptions) !== JSON.stringify(this.props.mapOptions)) {
			this._googleMap.setCenter(new google.maps.LatLng(
				nextProps.mapOptions.center.lat,
				nextProps.mapOptions.center.lng
			));
		}
	}
	componentDidMount() {
        const { mapOptions } = this.props;
        this._googleMap = new google.maps.Map(findDOMNode(this.refs.weatherMap), mapOptions);
        google.maps.event.addListener(this._googleMap, "click", this._onMapRightClicked.bind(this));
	}
	_onMapRightClicked(event) {
		const { actions } = this.props;
		let lat = event.latLng.lat(),
	        lng = event.latLng.lng();
	    actions.getWeatherData(lat, lng);
	}
	render() {
		return (
			<div id="weatherMap" ref="weatherMap" className="weather-map"></div>
		);
	}
}

export default WeatherMap;
