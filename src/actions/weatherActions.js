import { GET_WEATHER_DATA } from '../constants/actionTypes';

export function getWeatherData(city) {
	return {
		type: GET_WEATHER_DATA,
		city
	};
}
