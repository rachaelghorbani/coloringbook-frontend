import React, {useEffect} from 'react';
import FoxSvg from './svgs/fox'
import ParticlesBackground from './particlesBackground'
import ColoringPalette from './coloringPalette'
import {setCurrentColor} from '../redux/actions/coloringActions'
import {connect} from 'react-redux'
import {components} from './componentList'

const ColoringPage = (props) => {
    // const components = {
    //     "FoxSvg" : FoxSvg
    // }

    useEffect(()=>{
        return ()=>{
            props.setCurrentColor("white")
        }
    }, [])
    
    const Svg = components[props.image.component]
    //for the thumbnails there will need to be an initial fill of white since they technically dont exist yet. User thumbnails will need to use their own fill.
    //so maybe if the svg has a fill colors props, use that, otherwise use the initialfill array

    //need to user the fill array from user.user_images.this image
  console.log(props.image.fill_colors)
	return (
		<div className="loginContainer">
			<ParticlesBackground />
			<ColoringPalette />
            <Svg size="Full" fillColors={props.image.fill_colors} image={props.image}/>
		</div>
	);
};

const mapDispatchToProps = dispatch => {
    return {
        setCurrentColor: color => dispatch(setCurrentColor(color))
    }
}

export default connect(null, mapDispatchToProps)(ColoringPage)