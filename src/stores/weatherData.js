import {
	GET_FAKE_WEATHER_DATA,
    GET_WEATHER_DATA
} from '../constants/actionTypes';

let initialState = {
	mapOptions: {
		center: {
			lat: -34.397,
			lng: 150.644
		},
        zoom: 8
	},
	info: {
		city: 'Taipei',
		temp: 29
	}
};

export default function weatherReducer(state = initialState, action) {
	switch (action.type) {
		case GET_FAKE_WEATHER_DATA:
		    return {
		    	...state,
		    	info: {
		    		city: action.data.city,
			    	temp: Math.floor(Math.random() * 35)
		    	}
		    }
		case GET_WEATHER_DATA:
		    return {
		    	...state,
		    	info: {
		    		city: action.data.city,
			    	temp: action.data.temp
		    	}
		    }
		default:
		    return state;
	}
};
