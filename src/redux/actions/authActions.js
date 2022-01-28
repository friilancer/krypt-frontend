import {GET_USER, LOGIN_USER, LOGOUT_USER} from './types';
import axios from 'axios'

export const verifyUser = () => async dispatch => {
	let token = localStorage.getItem('auth_token');
	if(token){
		try {
			let {data} = await axios({
				url: 'api/guest/verify',
				method: 'get',
				headers: {
					auth_token: token
				}
			})
			dispatch({
				type: GET_USER,
				payload: {token, user:data}
			})
		} catch (error) {
			dispatch({
				type: LOGOUT_USER
			})
		}
	}else {
		dispatch({
			type: LOGOUT_USER
		})
	}
	
}

export const loginUser = (userCredentials) => {
	return {
		type: LOGIN_USER,
		payload: userCredentials
	}
}

export const logoutUser = () => {
	return {
		type: LOGOUT_USER
	}
}