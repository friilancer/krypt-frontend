import { combineReducers } from 'redux';
import bookingsReducer from './bookingsReducer';
import authReducer from './authReducer';

export default combineReducers({
	bookings: bookingsReducer,
	auth: authReducer
})