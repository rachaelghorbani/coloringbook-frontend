import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loginSubmit, resetLoginSuccess } from '../redux/actions/userActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';
import ParticlesBackground from '../components/particlesBackground'


const LoginForm = (props) => {
	// username is our username state, and setUsername is our function to update the username state value
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');

	const changeHandler = (e) => {
		if (e.target.name === 'username') {
			setUsername(e.target.value);
		} else {
			setPassword(e.target.value);
		}
	};

	const submitHandler = (e) => {
		e.preventDefault();
		props.loginSubmit({ username, password });
		setUsername('');
		setPassword('');
	};

    //component should update any time the loginFailed prop is changed. After 2 seconds it will reset to false. This way the effect happens every time a user input is incorrect, not just the first time
    useEffect(()=>{
        setTimeout(()=>{
            props.resetLoginSuccess()
        }, 2000)
    }, [props.loginFailed])

    //resets failedlogin to false when the component unmounts so that the form doesn't shake if you click elsewhere and then come back to the login page with the form

    useEffect(()=>{
        return () => {
            props.resetLoginSuccess()
        }
    }, [])

    
console.log(props.loginFailed)
	return (
		<div className="loginContainer">
            <ParticlesBackground />
            <div style={{position: 'absolute'}}>
			<form className={`loginForm${!props.loginFailed ? '' : 'Failed'}`} onSubmit={submitHandler}>
				<div className="loginHeader">
					<FontAwesomeIcon icon={faStarHalf} />
					<h3 style={{ display: 'inline' }}>Login</h3>
					<FontAwesomeIcon icon={faStarHalf} flip="horizontal" />
				</div>
				<div className="username">
					{/* <label>Username</label> */}
					<input
						name="username"
						onChange={changeHandler}
						value={username}
						type="text"
						placeholder="enter username"
					/>
				</div>
				<div className="password">
					{/* <label>Password</label> */}
					<input
						name="password"
						onChange={changeHandler}
						value={password}
						type="password"
						placeholder="enter password"
					/>
				</div>
                <div className='buttonGrid'>
				<input className="submitButton" type="submit" value="Login!" />
                </div>
			</form>
            </div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		loginFailed: state.loginFailed
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loginSubmit: (user) => dispatch(loginSubmit(user)),
        resetLoginSuccess: () => dispatch(resetLoginSuccess()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
