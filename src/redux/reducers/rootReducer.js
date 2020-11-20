import { combineReducers } from 'redux';

let defaultState = {
	user: null,
	loginFailed: false
};

const userReducer = (state = defaultState.user, action) => {
	switch (action.type) {
		case 'LOGIN_USER':
			return action.payload;
		case 'LOGOUT_USER':
			return action.payload;
		default:
			return state;
	}
};

const loginFailedReducer = (state = defaultState.loginFailed, action) => {
	switch (action.type) {
		case 'LOGIN_FAILED':
			return action.payload;
		case 'RESET_LOGIN_SUCCESS':
			return action.payload;
		default:
			return state;
	}
};

let rootReducer = combineReducers({
	user: userReducer,
	loginFailed: loginFailedReducer
});

export default rootReducer;
