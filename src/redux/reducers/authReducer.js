import {GET_USER, LOGIN_USER, EDIT_USER, LOGOUT_USER} from '../actions/types';
import axios from 'axios'

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
		case EDIT_USER:{
			return{
				...state,
				user:action.payload
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