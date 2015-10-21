import request from 'superagent';
import {
	GET_FAKE_WEATHER_DATA,
    GET_WEATHER_DATA,
    GET_WEATHER_DATA_SUCCESS,
    GET_WEATHER_DATA_FAIL
} from '../constants/actionTypes';
import { OPEN_WEATHER_MAP_TOKEN } from '../constants/tokens';

export function getFakeWeatherData(city) {
	return {
		type: GET_FAKE_WEATHER_DATA,
		data: {city}
	};
}

export function getWeatherData(...queryConditions) {
	let url = 'http://api.openweathermap.org/data/2.5/weather?units=metric';
	switch (queryConditions.length) {
		case 1:
		    url += `&q=${queryConditions[0]}&appid=${OPEN_WEATHER_MAP_TOKEN}`;
		    break;
		case 2:
		    url += `&lat=${queryConditions[0]}&lon=${queryConditions[1]}&appid=${OPEN_WEATHER_MAP_TOKEN}`;
		    break;
		default:
		    url = '';
	}
	return dispatch => {
		if (url) {
			dispatch({
				type: GET_WEATHER_DATA
			});
			request(url, (err, res) => {
				if (err || res.body.cod !== 200) {
					dispatch({
						type: GET_WEATHER_DATA_FAIL
					});
				} else {
					dispatch({
						type: GET_WEATHER_DATA_SUCCESS,
						data: res.body
					});
				}
			});
		} else {
			dispatch(getFakeWeatherData());
		}
	};
}
