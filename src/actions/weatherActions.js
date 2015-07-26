import request from 'superagent';
import {
	GET_FAKE_WEATHER_DATA,
    GET_WEATHER_DATA
} from '../constants/actionTypes';

export function getFakeWeatherData(city) {
	return {
		type: GET_FAKE_WEATHER_DATA,
		data: {city}
	};
}

export function getWeatherData(city) {
	return dispatch => {
		request(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`, (err, res) => {
			dispatch({
				type: GET_WEATHER_DATA,
				data: {
					city: res.body.name,
					temp: res.body.main.temp
				}
			});
		});
	};
}
