import './App.css';
import NavBar from './components/navBar';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import LoginForm from './components/loginForm';

const App = (props) => {
	return (
		<div className="App">
			<NavBar />
			<div className="main">
				<Switch>
					<Route path="/login" render={() => <LoginForm />} />
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

export default connect(mapStateToProps)(App);
