import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux'
import {submitNewUser, resetLoginSuccess} from '../redux/actions/userActions'
import {withRouter} from 'react-router-dom'
import ParticlesBackground from './particlesBackground'




const SignupForm = (props) => {
	const [ first_name, setFirstName ] = useState('');
	const [ last_name, setLastName ] = useState('');
	const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    
    //need to collect this data and send it back to the server to try and make a new user
    const submitHandler = e => {
        e.preventDefault()
        const currentUser = {
            first_name,
            last_name,
            username,
            password
        }
        props.submitNewUser(currentUser, props.history)
        //need a dispatch function
        setFirstName('')
        setLastName('')
        setPassword('')
        setUsername('')
    }

    useEffect(()=>{
        setTimeout(()=>{
            props.resetLoginSuccess()
        }, 2000)
    }, [props.loginFailed])

    useEffect(()=>{
        return()=>{
            props.resetLoginSuccess()
        }
    }, [])
console.log(props.loginFailed)
	return (
		<div className="loginContainer">
            <ParticlesBackground/>
            <div style={{position: 'absolute'}}>
			<form className={`signupForm${!props.loginFailed ? '' : 'Failed'}`} onSubmit={submitHandler}>
            <div className="signUpHeader">
					<FontAwesomeIcon icon={faStarHalf} />
					<h3 style={{ display: 'inline' }}>Sign Up</h3>
					<FontAwesomeIcon icon={faStarHalf} flip="horizontal" />
				</div>
				<div className='signUpFirstName'>
					<label>First Name</label>
					<input
						name="first_name"
						type="text"
						value={first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder='enter first name'
					/>
				</div>
				<div className='signUpLastName'>
					<label >Last Name</label>
					<input placeholder='enter last name' name="last_name" type="text" value={last_name} onChange={(e) => setLastName(e.target.value)} />
				</div>
				<div className='signUpUsername'>
					<label>Username</label>
					<input placeholder='enter user name'name="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
				</div>
				<div className='signUpPassword'>
					<label>Password</label>
                    <input 
                    placeholder='enter password'
						name="password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
                <div className='buttonGridSignup'>

				<input className='submitButton' type="submit" value="Sign Up!" />
                </div>
			</form>
            </div>
		</div>
	);
};

const mapDispatchToProps = dispatch => {
    return {
        submitNewUser: (user, history) => dispatch(submitNewUser(user, history)),
        resetLoginSuccess: () => dispatch(resetLoginSuccess())
    }
}

const mapStateToProps = state => {
    return {
        loginFailed: state.loginFailed
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignupForm));
