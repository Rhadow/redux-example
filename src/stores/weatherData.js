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
		temp: 29,
		imageId: '01d'
	},
	loading: false
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
		    	}
		    }
		case GET_WEATHER_DATA:
		    return {
		    	...state,
		    	info: {
		    		city: action.data.name,
					temp: action.data.main.temp,
					imageId: action.data.weather[0].icon
		    	}
		    }
		default:
		    return state;
	}
};
