import {GET_USER, LOGIN_USER, EDIT_USER, LOGOUT_USER} from './types';

export const getUser = () => {
	return {
		type: GET_USER
	}
}

export const loginUser = (userCredentials) => {
	return {
		type: LOGIN_USER,
		payload: userCredentials
	}
}

export const editUser = ({firstName, lastName}) => {
	return {
		type: EDIT_USER,
		payload: {firstName, lastName}
	}
}

export const logoutUser = () => {
	return {
		type: LOGOUT_USER
	}
}