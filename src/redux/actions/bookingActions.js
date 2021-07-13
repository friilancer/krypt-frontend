import {ADD_BOOKING, GET_BOOKINGS} from './types';

export const addBooking = ({roomId, from, to}) => {
	return {
		type: ADD_BOOKING,
		payload: {roomId, from, to}
	}
}

export const getBookings = () => {
	return {
		type: GET_BOOKINGS
	}
}