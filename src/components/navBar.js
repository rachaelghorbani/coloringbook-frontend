import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../redux/actions/userActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPuzzlePiece, faClipboardCheck, faSignInAlt, faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import undraw_refreshing_beverage_td3r from '../assets/undraw_refreshing_beverage_td3r.svg';
import { connect } from 'react-redux';

const NavBar = (props) => {

    const [navExpand, setNavExpand ] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
	const localLogout = () => {
        localStorage.removeItem('token')
        props.logoutUser();
        setNavExpand(false)
	};


 
    // sets an event listener for window resize, but only resets the windowWidth, thereby rerendering the component, if the width has changed, NOT the height. Don't need to listen to height changes

    useEffect(()=>{
        const handleResize = () => {
            if(windowWidth !== window.innerWidth){
                setWindowWidth(window.innerWidth)
                console.log(windowWidth)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }

    })
 
    
	//have a button that when clicked extends the background and has a list of nav icons
	const linksToShow = () => {
		if (props.user) {
			return (
				<>
					{/* <Link to="/" onClick={() => setNavExpand(false)}>
						<FontAwesomeIcon icon={faHome} />Home
					</Link> */}
					<Link to='/myimages' onClick={() => setNavExpand(false)}>
						<FontAwesomeIcon icon={faPuzzlePiece} />My Images
					</Link>
                    <Link to="/allimages" onClick={() => setNavExpand(false)}>
						<FontAwesomeIcon icon={faPuzzlePiece} />All Images
					</Link>
					<Link to="/" onClick={localLogout}>
						<FontAwesomeIcon icon={faSignInAlt} flip="horizontal" />Logout
					</Link>
                    <Link to="/squirrel" onClick={() => setNavExpand(false)}>
						<FontAwesomeIcon icon={faSignInAlt} flip="horizontal" />Squirrel
					</Link>
				</>
			);
		} else {
			return (
				<>
					<Link to="/login" onClick={() => setNavExpand(false)}>
						<FontAwesomeIcon icon={faClipboardCheck} />Login
					</Link>
					<Link to="/signup" onClick={() => setNavExpand(false)}>
						<FontAwesomeIcon icon={faSignInAlt} />Signup
					</Link>
				</>
			);
		}
	};

	//eventually put horizontal navbar with dropdown in else statement
	const navBarToShow = () => {
		if (windowWidth > 768) {
			return (
				<nav className="navbar">
					<img alt="sheep svg" src={undraw_refreshing_beverage_td3r} />
					{linksToShow()}
				</nav>
			);
		} else {
            return(
                <nav className="horizNavBar">
                    <img alt="sheep svg" src={undraw_refreshing_beverage_td3r}/>
                    <div className='downArrow'>{navExpand ? <FontAwesomeIcon onClick={expandNav}icon={faAngleDoubleUp} /> : <FontAwesomeIcon onClick={expandNav}icon={faAngleDoubleDown} />}</div>
                    {navExpand ? 
                        linksToShow()
                    : null
                    }
                </nav>
            )
        }
    };
    const expandNav = () => {
        setNavExpand(prevState => !prevState)
    }
	return (	
        <>
        {navBarToShow()}
        </>
		// <nav className="navbar">
		// 	<img alt="sheep svg" src={undraw_refreshing_beverage_td3r} />
		// 	{linksToShow()}
		// </nav>
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
