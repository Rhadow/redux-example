import './_WeatherDisplayer';
import React, { Component, PropTypes } from 'react';

class WeatherDisplayer extends Component {
	static propTypes = {
		city: PropTypes.string.isRequired,
		temp: PropTypes.number.isRequired,
		imageId: PropTypes.string.isRequired,
		isLoading: PropTypes.bool
	}
	static defaultProps = {
		isLoading: false
	}

	_renderContent() {
		const {city, temp, imageId, isLoading} = this.props;
		let resultHtml = (<div>Loading...</div>);
		if (!isLoading) {
			resultHtml = (
				<div className="weather-displayer">
				    <div className="display-title">{city}</div>
				    <div className="display-content">
				        <div className={`weather-icon i${imageId}`}></div>
				        <div className="temperature">{temp}°C</div>
				    </div>
				</div>
			);
		}
		return resultHtml;
	}

	render() {
		let contentHtml = this._renderContent();
		return (
			<div>
			    {contentHtml}
			</div>
		);
	}
}

export default WeatherDisplayer;
