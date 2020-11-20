import React from 'react';
import { Link } from 'react-router-dom';
import { logoutUser} from '../redux/actions/userActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPuzzlePiece, faClipboardCheck, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import undraw_refreshing_beverage_td3r from '../assets/undraw_refreshing_beverage_td3r.svg';
import { connect } from 'react-redux';

const NavBar = (props) => {

    const localLogout = () => {
        props.logoutUser()
    }

    //have a button that when clicked extends the background and has a list of nav icons
	const linksToShow = () => {
		if (props.user) {
			return (
				<nav>
					<Link to="/">
						<FontAwesomeIcon icon={faHome} />Home
					</Link>
					<Link to="/puzzles">
						<FontAwesomeIcon icon={faPuzzlePiece} />Puzzles
					</Link>
                    <Link to='/' onClick={localLogout}>
                        <FontAwesomeIcon icon={faSignInAlt} flip='horizontal'/>Logout
                    </Link>
				</nav>
			);
		} else {
            return (
                <nav>
					<Link to="/login">
						<FontAwesomeIcon icon={faClipboardCheck} />Login
					</Link>
					<Link to="/signup">
						<FontAwesomeIcon icon={faSignInAlt} />Signup
					</Link>
				</nav>
            )
        }
    };
	return (
		<div className="navbar">
			<img alt="sheep svg" src={undraw_refreshing_beverage_td3r} />
            {linksToShow()}
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
        logoutUser: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
