import React from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {createUserImage} from '../redux/actions/userImageActions'
import '../css/imageCard.css'

import FoxSvg from './svgs/fox';

const ImageCard = (props) => {
	const components = {
		FoxSvg: FoxSvg
    };
    const createImage = () => {
        const userImageObj = {
            user_id: props.user.id,
            image_id: props.image.id
        }
        props.createUserImage(userImageObj, props.history)
        
        //component will need to listen for user
        //in here will need to create a new instance of user-image with props.image.id and props.user.id. fill is default. 
        //will need to set current image to this image
        //will also need to update a users images in state
        //will then need to redirect to the coloring/show page
        //when doing the route for this, will basically need to do the same thing as here with the components. Should have access to this from userImage(userImage.image.component)
    }

    const Svg = components[props.image.component];
	return (
		<div className={`imageCardDiv${props.image.component}`}>
			<div>
				<h3 style={{ marginBottom: 0 }}>{props.image.title}</h3>
			</div>
			<Svg size="Thumbnail" />
			<div>
				<button onClick={createImage}className="colorButton">Color Me!</button>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
    return {
        user: state.user,
        currentImage: state.currentImage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createUserImage: (userImageObj, history) => dispatch(createUserImage(userImageObj, history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ImageCard));
