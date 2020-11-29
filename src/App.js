import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/navBar';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import LoginForm from './components/loginForm';
import WelcomePage from './components/welcomePage';
import SignupForm from './components/signupForm';
import { findUserByToken } from './redux/actions/userActions';
import FoxSvg from './components/svgs/fox';
import AllImagesContainer from './containers/allImagesContainer';

const App = (props) => {
	useEffect(() => {
        props.findUserByToken(props.history);
        //also want to fetch all images

		//pass the newArray as a prop to some dispatch function. this function will set the initial fill array to all white. can then listen for this array in the svg image. each path must be set to a particular index of this array, that way we only change one color at a time. will have to update the array with the new color on every click

		//could add a general class name to all svgs and then when we cant to make a card, document query selector all and iterate through them to create an image with the src= to the svg
	}, []);
	return (
		<div className="App">
			<NavBar />
			<div className="main">
				<Switch>
					<Route path="/login" render={() => <LoginForm />} />
					<Route path="/signup" render={() => <SignupForm />} />
                    <Route path="/allimages" render={() => <AllImagesContainer />}/>
					<Route path="/svg" render={() => <FoxSvg />} />
					<Route path="/" render={() => <WelcomePage />} />
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
const mapDispatchToProps = (dispatch) => {
	return {
		findUserByToken: (history) => dispatch(findUserByToken(history))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
