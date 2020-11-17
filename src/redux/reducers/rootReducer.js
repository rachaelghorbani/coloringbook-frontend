import { combineReducers } from 'redux';

let defaultState = {
	user: null
};

const userReducer = (state = defaultState.user, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

let rootReducer = combineReducers({
	user: userReducer
});

export default rootReducer