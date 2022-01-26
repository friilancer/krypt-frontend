import {DELETE_BOOKING, GET_BOOKINGS} from '../actions/types';

const initialState = [];

const reducerFunction = (state=initialState, action) => {
	switch(action.type){
		case GET_BOOKINGS: {
			return [
				...action.payload
			]
		}
		case DELETE_BOOKING: {
			return [
				...state.filter(booking => booking._id !== action.payload)
			]	
		}
		default:
			return state
	}
}

export default reducerFunction