import React from 'react';
import FoxSvg from '../components/svgs/fox';
import ParticlesBackground from './particlesBackground';
import {components} from './componentList'

const FocusImagePage = (props) => {
	// const components = {
	// 	"FoxSvg": FoxSvg
    // };
    console.log(components)
	//in here will display the fully colored SVG with buttons to download, edit, or delete
	//this will mean we have to pass down the fill colors and size, but also another prop that we will check for in the onFill method. Want to make sure if an SVG has this prop that we don't allow the image to be filled

	const Svg = components[props.image.component];
	return (
		<div className="loginContainer">
			<ParticlesBackground />
			<Svg size="Full" fillColors={props.image.fill_colors} image={props.image} display="true" />
		</div>
	);
};

export default FocusImagePage;
