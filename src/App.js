import React, {useEffect} from 'react'
import './App.css';
import NavBar from './components/navBar';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import LoginForm from './components/loginForm';
import WelcomePage from './components/welcomePage';
import SignupForm from './components/signupForm'
import {findUserByToken} from './redux/actions/userActions'
import SVGTest from './components/svgTest';

const App = (props) => {
    useEffect(()=>{
        props.findUserByToken(props.history)

     
        //pass the newArray as a prop to some dispatch function. this function will set the initial fill array to all white. can then listen for this array in the svg image. each path must be set to a particular index of this array, that way we only change one color at a time. will have to update the array with the new color on every click
    }, [])
	return (
		<div className="App">
			<NavBar />
			<div className="main">
				<Switch>
					<Route path="/login" render={() => <LoginForm />} />
                    <Route path='/signup' render={() => <SignupForm />} />
                    <Route path='/svg' render={() => <SVGTest />} />
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
