import React from 'react';
import {connect} from 'react-redux'
import {loginSubmit, resetLoginSuccess} from '../redux/actions/userActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStarHalf} from '@fortawesome/free-solid-svg-icons'

class LoginForm extends React.Component {
	state = {
		username: '',
		password: ''
	};

	changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
    };
    
    submitHandler = e => {
        e.preventDefault()
        this.props.loginSubmit(this.state)
        this.setState({username: '', password: ''})
    }

    
	render() {
        console.log
		return (
			<div className={`loginContainer${!this.props.loginFailed ? '': 'failed'}`}>
				<form onSubmit={this.submitHandler}>
                    <div className='loginHeader'>
                    <FontAwesomeIcon icon={faStarHalf} /><h3 style={{display: 'inline'}}>Login Form</h3><FontAwesomeIcon icon={faStarHalf} flip='horizontal'/>
                    </div>
                    <div className='username'>
                        <label >Username</label>
                        <input name="username" onChange={this.changeHandler}value={this.state.username} type="text" placeholder="enter username" />
                    </div>
                    <div className='password'>
                        <label >Password</label>
                        <input name="password" onChange={this.changeHandler}value={this.state.password} type="password" placeholder="enter password" />
                    </div>
					<input className='submitButton'type="submit" value='Login!'/>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
    return {
        loginFailed: state.loginFailed
    }
}
const mapDispatchToProps = dispatch => {
    return {
        loginSubmit: user => dispatch(loginSubmit(user)),
        resetLoginSuccess: () => dispatch(resetLoginSuccess())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
