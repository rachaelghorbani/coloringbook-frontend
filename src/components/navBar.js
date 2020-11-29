import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../redux/actions/userActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPuzzlePiece, faClipboardCheck, faSignInAlt, faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import undraw_refreshing_beverage_td3r from '../assets/undraw_refreshing_beverage_td3r.svg';
import { connect } from 'react-redux';

const NavBar = (props) => {
	const localLogout = () => {
        localStorage.removeItem('token')
		props.logoutUser();
	};

	const [ navExpand, setNavExpand ] = useState(false);

	//have a button that when clicked extends the background and has a list of nav icons
	const linksToShow = () => {
		if (props.user) {
			return (
				<>
					<Link to="/">
						<FontAwesomeIcon icon={faHome} />Home
					</Link>
					<Link to={`/userimages/${1}`}>
						<FontAwesomeIcon icon={faPuzzlePiece} />Puzzles
					</Link>
                    <Link to="/allimages">
						<FontAwesomeIcon icon={faPuzzlePiece} />All Images
					</Link>
					<Link to="/" onClick={localLogout}>
						<FontAwesomeIcon icon={faSignInAlt} flip="horizontal" />Logout
					</Link>
				</>
			);
		} else {
			return (
				<>
					<Link to="/login">
						<FontAwesomeIcon icon={faClipboardCheck} />Login
					</Link>
					<Link to="/signup">
						<FontAwesomeIcon icon={faSignInAlt} />Signup
					</Link>
				</>
			);
		}
	};

	//eventually put horizontal navbar with dropdown in else statement
	const navBarToShow = () => {
		if (window.innerWidth > 768) {
			return (
				<div className="navbar">
					<img alt="sheep svg" src={undraw_refreshing_beverage_td3r} />
					{linksToShow()}
				</div>
			);
		} else (
            //not dynamic. need to adjust link buttons based on whether is logged in or not. also need to adjust the width of the main container. also need content in main container to be pushed down accordingly.
            <div className={`horizNav${navExpand}`}>
			<img alt="sheep svg" src={undraw_refreshing_beverage_td3r}/>
			<div className='downArrow'>{navExpand ? <FontAwesomeIcon onClick={expandNav}icon={faAngleDoubleUp} /> : <FontAwesomeIcon onClick={expandNav}icon={faAngleDoubleDown} />}</div>
			{navExpand ? (
				<>
					<div className='horizNavLink1'>
                        <Link to="/login">
						    <FontAwesomeIcon icon={faClipboardCheck} />Login
					    </Link>
                    </div>
					<div className='horizNavLink2'>
                        <Link to="/signup">
						    <FontAwesomeIcon icon={faSignInAlt} />Signup
					    </Link>
                    </div>
				</>
			) : null}
		</div>
        )
    };
    const expandNav = () => {
        setNavExpand(prevState => !prevState)
    }
	return (	
		<nav className="navbar">
			<img alt="sheep svg" src={undraw_refreshing_beverage_td3r} />
			{linksToShow()}
		</nav>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		logoutUser: () => dispatch(logoutUser())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
