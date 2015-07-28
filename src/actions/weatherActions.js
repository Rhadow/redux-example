import request from 'superagent';
import {
	GET_FAKE_WEATHER_DATA,
    GET_WEATHER_DATA,
    GET_WEATHER_DATA_SUCCESS,
    GET_WEATHER_DATA_FAIL
} from '../constants/actionTypes';

export function getFakeWeatherData(city) {
	return {
		type: GET_FAKE_WEATHER_DATA,
		data: {city}
	};
}

export function getWeatherData(...queryConditions) {
	let url = 'http://api.openweathermap.org/data/2.5/weather?units=metric';
	if (queryConditions.length === 1 && queryConditions[0]) {
		url += `&q=${queryConditions[0]}`;
	} else if (queryConditions.length === 2) {
		url += `&lat=${queryConditions[0]}&lon=${queryConditions[1]}`;
	} else {
		url = '';
	}
	if (url) {
		let promise = new Promise((resolve, reject) => {
			request(url, (err, res) => {
				if (err || res.body.cod !== 200) {
					reject(err);
				} else {
					resolve(res.body);
				}
			});
		});
		return {
			types: [GET_WEATHER_DATA, GET_WEATHER_DATA_SUCCESS, GET_WEATHER_DATA_FAIL],
			promise: promise
		};
	} else {
		return getFakeWeatherData();
	}
}
