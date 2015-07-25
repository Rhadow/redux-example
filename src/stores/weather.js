import { GET_WEATHER_DATA } from '../constants/actionTypes';

let initialState = {
	weather: {
		city: 'Taipei',
		temp: 29
	}
};

export default function weather(state = initialState, action) {
	switch (action.type) {
		case GET_WEATHER_DATA:
		    return {
		    	...state,
		    	weather: {
		    		city: action.city,
			    	temp: Math.floor(Math.random() * 35)
		    	}
		    }
		default:
		    return state;
	}
};
