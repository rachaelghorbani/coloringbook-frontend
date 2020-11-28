import { combineReducers } from 'redux';

const initialFill = () => {
	let newArr = new Array(688);
	for (let i = 0; i < newArr.length; i++) {
		newArr[i] = 'white';
	}
	return newArr;
};

let defaultState = {
	user: null,
	loginFailed: false,
	initialFill: initialFill(),
	currentColor: 'white'
};
const initialFillReducer = (state = defaultState.initialFill, action) => {
	switch (action.type) {
        case 'RESET_FILL_ARRAY':
            return action.payload;
		default:
			return state;
	}
};
const currentColorReducer = (state = defaultState.currentColor, action) => {
	switch (action.type) {
		case 'SET_CURRENT_COLOR':
			return action.payload;
		default:
			return state;
	}
};
const userReducer = (state = defaultState.user, action) => {
	switch (action.type) {
		case 'LOGIN_USER':
			return action.payload;
		case 'LOGOUT_USER':
			return action.payload;
		case 'LOGIN_FROM_TOKEN':
			return action.payload;
		case 'SIGNUP_USER':
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
	loginFailed: loginFailedReducer,
    initialFill: initialFillReducer,
    currentColor: currentColorReducer
});

export default rootReducer;
