import {GET_USER, LOGIN_USER, EDIT_USER, LOGOUT_USER} from '../actions/types';

const initialState = {};

const reducerFunction = (state=initialState, action) => {
	switch(action.type){
		case GET_USER:{
			return {
				...state
			}
		}
		case LOGIN_USER:{
			return {
				...state,
				...action.payload
			}
		}
		case EDIT_USER:{
			return{
				...state,
				user:actionpayload
			}
		}
		case LOGOUT_USER:{
			return {}
		}
		default:
			return state
	}
}

export default reducerFunction