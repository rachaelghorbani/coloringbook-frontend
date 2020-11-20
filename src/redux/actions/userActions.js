export const loginSubmit = (user) => {
	return function(dispatch) {
        // const resetLoginSuccess = () => {
        //     setTimeout(() => {
        //         this.props.resetLoginSuccess();
        //    },2000);
        // }

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({ user })
		};

		fetch('http://localhost:3000/login', options).then((resp) => resp.json()).then((returnedUser) => {
			if (returnedUser.user) {
				localStorage.setItem('token', returnedUser.jwt);
				return dispatch({ type: 'LOGIN_USER', payload: returnedUser.user });
				//set local storage with token
			} else {
				return dispatch({ type: 'LOGIN_FAILED', payload: true });
			}
		});
	};
};
export const logoutUser = () => {
	return {
		type: 'LOGOUT_USER',
		payload: null
	};
};
export const resetLoginSuccess = () => {
	return {
		type: 'RESET_LOGIN_SUCCESS',
		payload: false
	};
};


