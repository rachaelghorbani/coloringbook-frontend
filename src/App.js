import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/navBar';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import LoginForm from './components/loginForm';
import WelcomePage from './components/welcomePage';
import SignupForm from './components/signupForm';
import { findUserByToken } from './redux/actions/userActions';
// import FoxSvg from './components/svgs/fox';
import AllImagesContainer from './containers/allImagesContainer';
import ColoringPage from './components/coloringPage'
import UserImagesContainer from './containers/userImagesContainer'
import FocusImagePage from './components/focusImagePage'
import RabbitSvg from './components/svgs/rabbit';
const App = (props) => {
	useEffect(() => {
        props.findUserByToken(props.history);
        //also want to fetch all images

		//pass the newArray as a prop to some dispatch function. this function will set the initial fill array to all white. can then listen for this array in the svg image. each path must be set to a particular index of this array, that way we only change one color at a time. will have to update the array with the new color on every click

		//could add a general class name to all svgs and then when we cant to make a card, document query selector all and iterate through them to create an image with the src= to the svg
    }, []);
    if(props.user){
    console.log(props.user.user_images)
    }

	return (
		<div className="App">
			<NavBar />
			<div className="main">
				<Switch>
                    
                <Route path="/userimages/:id" render={({match}) => {
                    if(props.user){
                        const id = parseInt(match.params.id)
                        const image = props.user.user_images.find(ui => ui.id === id)
                        return(<ColoringPage image={image}/>)
                    }else{
                        props.history.push("/allimages")
                    }
                }}/>
                    <Route path="/focusimage/:id" render={({match}) => {
                        const id = parseInt(match.params.id)
                        const image = props.user.user_images.find(ui => ui.id === id)
                        return(
                        <FocusImagePage image={image}/>
                        )
                    }
                } />

					<Route path="/login" render={() => <LoginForm />} />
					<Route path="/signup" render={() => <SignupForm />} />
                    <Route path="/allimages" render={() => <AllImagesContainer />}/>
                    <Route path="/myimages" render={() => props.user? <UserImagesContainer /> : props.history.push('/')}/>
					<Route path="/squirrel" render={() => <RabbitSvg size="Full"/>} />
					<Route path="/" render={() => <WelcomePage />} />
				</Switch>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
        user: state.user,
        // currentImage: state.currentImage
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		findUserByToken: (history) => dispatch(findUserByToken(history))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
