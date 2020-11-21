import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';



const SignupForm = (props) => {
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');

	return (
		<div className="loginContainer">
			<form className="signupForm">
            <div className="signUpHeader">
					<FontAwesomeIcon icon={faStarHalf} />
					<h3 style={{ display: 'inline' }}>Sign Up</h3>
					<FontAwesomeIcon icon={faStarHalf} flip="horizontal" />
				</div>
				<div className='signUpFirstName'>
					<label>First Name</label>
					<input
						name="firstName"
						type="text"
						value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder='enter first name'
					/>
				</div>
				<div className='signUpLastName'>
					<label >Last Name</label>
					<input placeholder='enter last name' name="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
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
	);
};
export default SignupForm;
