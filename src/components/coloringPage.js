import React from 'react';
import FoxSvg from './svgs/fox'
import ParticlesBackground from './particlesBackground'
import ColoringPalette from './coloringPalette'

const ColoringPage = (props) => {
    const components = {
        "FoxSvg" : FoxSvg
    }
    const Svg = components[props.image.image_component]
    //for the thumbnails there will need to be an initial fill of white since they technically dont exist yet. User thumbnails will need to use their own fill.
    //so maybe if the svg has a fill colors props, use that, otherwise use the initialfill array

    //need to user the fill array from user.user_images.this image
  
	return (
		<div className="loginContainer">
			<ParticlesBackground />
			<ColoringPalette />
            <Svg size="Full" fillColors={props.image.fill_colors} image={props.image}/>
		</div>
	);
};
export default ColoringPage