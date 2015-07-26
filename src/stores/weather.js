import {
	GET_FAKE_WEATHER_DATA,
    GET_WEATHER_DATA
} from '../constants/actionTypes';

let initialState = {
	weather: {
		city: 'Taipei',
		temp: 29
	}
};

export default function weather(state = initialState, action) {
	switch (action.type) {
		case GET_FAKE_WEATHER_DATA:
		    return {
		    	...state,
		    	weather: {
		    		city: action.data.city,
			    	temp: Math.floor(Math.random() * 35)
		    	}
		    }
		case GET_WEATHER_DATA:
		    return {
		    	...state,
		    	weather: {
		    		city: action.data.city,
			    	temp: action.data.temp
		    	}
		    }
		default:
		    return state;
	}
};
