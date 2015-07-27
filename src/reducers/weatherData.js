import {
	GET_FAKE_WEATHER_DATA,
    GET_WEATHER_DATA,
    GET_WEATHER_DATA_SUCCESS,
    GET_WEATHER_DATA_FAIL
} from '../constants/actionTypes';

let initialState = {
	mapOptions: {
		center: {
			lat: 48.435,
			lng: -123.359
		},
        zoom: 8
	},
	info: {
		city: 'Taipei',
		temp: 29,
		imageId: '01d'
	},
	isLoading: false,
	hasError: false
};

export default function weatherReducer(state = initialState, action) {
	switch (action.type) {
		case GET_FAKE_WEATHER_DATA:
		    return {
		    	...state,
		    	info: {
		    		city: action.data.city || ['Taipei', 'Vancouver', 'California'][Math.floor(Math.random() * 3)],
			    	temp: Math.floor(Math.random() * 35),
			    	imageId: ['01d', '02d', '03d'][Math.floor(Math.random() * 3)]
		    	},
		    	isLoading: false
		    }
		case GET_WEATHER_DATA:
		    return {
		    	...state,
		    	isLoading: true,
		    	hasError: false
		    }
		case GET_WEATHER_DATA_SUCCESS:
		    return {
		    	...state,
		    	mapOptions: {
					center: {
						lat: action.data.coord.lat,
						lng: action.data.coord.lon
					},
			        zoom: 8
				},
		    	info: {
		    		city: action.data.name,
					temp: action.data.main.temp,
					imageId: action.data.weather[0].icon
		    	},
		    	isLoading: false
		    }
		case GET_WEATHER_DATA_FAIL:
		    return {
		    	...state,
		    	isLoading: false,
		    	hasError: true
		    }
		default:
		    return state;
	}
};
