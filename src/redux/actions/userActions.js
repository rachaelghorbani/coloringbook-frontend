export const loginSubmit = (user) => {
	return function(dispatch) {
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
			} else {
				return dispatch({ type: 'LOGIN_FAILED', payload: true });
			}
		});
	};
};
export const findUserByToken = (history) => {
	return function(dispatch) {
		const token = localStorage.getItem('token');
		if (token) {
			fetch('http://localhost:3000/profile', {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
				.then((resp) => resp.json())
				.then((user) => {
					if (user.user) {
						history.push('/mysummary');
						return dispatch({ type: 'LOGIN_FROM_TOKEN', payload: user.user });
					} else {
						history.push('/');
					}
				});
		} else {
			history.push('/');
		}
	};
};

export const submitNewUser = (user, history) => {
    return function(dispatch){
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({user})
        }
        fetch('http://localhost:3000/users', options)
        .then(resp => resp.json())
        .then(newUser => {
            if(newUser.user){
                history.push('/home')
                localStorage.setItem('token', newUser.jwt);
                return dispatch({type: 'SIGNUP_USER', payload: newUser.user})
            }
            else {
                return dispatch({ type: 'LOGIN_FAILED', payload: true });
            }
        })
    }
}

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


