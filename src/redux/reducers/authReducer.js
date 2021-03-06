import {GET_USER, LOGIN_USER, LOGOUT_USER} from '../actions/types';

const initialState ={};

const reducerFunction = (state=initialState, action) => {
	switch(action.type){
		case GET_USER:{
			return {
				...state,
				...action.payload,
			}
		}
		case LOGIN_USER:{
			localStorage.setItem('auth_token', action.payload.token)
			return {
				...state,
				...action.payload
			}
		}
		case LOGOUT_USER:{
			localStorage.removeItem('auth_token')
			return {}
		}
		default:
			return state
	}
}

export default reducerFunction