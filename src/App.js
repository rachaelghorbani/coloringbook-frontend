import React, {useEffect} from 'react'
import './App.css';
import NavBar from './components/navBar';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import LoginForm from './components/loginForm';
import WelcomePage from './components/welcomePage';
import SignupForm from './components/signupForm'
import {findUserByToken} from './redux/actions/userActions'

const App = (props) => {
    useEffect(()=>{
        props.findUserByToken(props.history)
    }, [])
	return (
		<div className="App">
			<NavBar />
			<div className="main">
				<Switch>
					<Route path="/login" render={() => <LoginForm />} />
                    <Route path='/signup' render={() => <SignupForm />} />
                    <Route path='/' render={() => <WelcomePage />}/>

				</Switch>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user
	};
};
const mapDispatchToProps = dispatch => {
    return {
        findUserByToken: (history) => dispatch(findUserByToken(history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
