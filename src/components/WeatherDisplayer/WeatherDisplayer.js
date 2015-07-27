import './_WeatherDisplayer';
import React, { Component, PropTypes } from 'react';

class WeatherDisplayer extends Component {
	static propTypes = {
		city: PropTypes.string.isRequired,
		temp: PropTypes.number.isRequired,
		imageId: PropTypes.string.isRequired,
		isLoading: PropTypes.bool,
		hasError: PropTypes.bool
	}
	static defaultProps = {
		isLoading: false,
		hasError: false
	}

	_renderContent() {
		const {city, temp, imageId, isLoading, hasError} = this.props;
		let resultHtml = (
			<div>
			    <div className="display-title">Loading...</div>
			    <div className="display-content">
				    <div className="sk-fading-circle">
					    <div className="sk-circle1 sk-circle"></div>
					    <div className="sk-circle2 sk-circle"></div>
					    <div className="sk-circle3 sk-circle"></div>
					    <div className="sk-circle4 sk-circle"></div>
					    <div className="sk-circle5 sk-circle"></div>
					    <div className="sk-circle6 sk-circle"></div>
					    <div className="sk-circle7 sk-circle"></div>
					    <div className="sk-circle8 sk-circle"></div>
					    <div className="sk-circle9 sk-circle"></div>
					    <div className="sk-circle10 sk-circle"></div>
					    <div className="sk-circle11 sk-circle"></div>
					    <div className="sk-circle12 sk-circle"></div>
					</div>
			        <div className="detail-content">Please Wait</div>
			    </div>
			</div>
		);
		if (!isLoading && !hasError) {
			resultHtml = (
				<div>
				    <div className="display-title">{city}</div>
				    <div className="display-content">
				        <div className={`weather-icon i${imageId}`}></div>
				        <div className="detail-content">{temp}°C</div>
				    </div>
				</div>
			);
		}
		if (!isLoading && hasError) {
			resultHtml = (
				<div>
				    <div className="display-title">Oops...</div>
				    <div className="display-content">
				        <div className="detail-content">City Name is not found.</div>
				    </div>
				</div>
			);
		}
		return resultHtml;
	}

	render() {
		let contentHtml = this._renderContent();
		return (
			<div className="weather-displayer">
			    {contentHtml}
			</div>
		);
	}
}

export default WeatherDisplayer;
