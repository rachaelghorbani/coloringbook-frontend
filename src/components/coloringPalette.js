import React, { useState } from 'react';
import '../css/coloringPalette.css';
import { connect } from 'react-redux';
import { setCurrentColor } from '../redux/actions/coloringActions';
import { ChromePicker } from 'react-color';

const ColoringPalette = (props) => {
	const [ customColor, setCustomColor ] = useState('#ffffff');
	const [ displayCustomColorPicker, setDisplayCustomColorPicker ] = useState(false);
	//want another row with a button to select custom color that will take up two cols and a color box for the custom color initially set to white or whatever the default picker returns.
	//onClick want a user to select a color, make the background of the box that color using the hex code it returns, and set current color color the same way as all the other boxes. Will probably need local state here to store the selected color so that it can be passed as the background color every time the user selects a diff color
	const colors = [
		'aqua',
		'blue',
		'white',
		'pink',
		'magenta',
		'red',
		'orangered',
		'black',
		'tan',
		'teal',
		'thistle',
		'darkgreen',
		'dodgerblue',
		'slateblue',
		'purple',
		'indigo',
		'indianred',
		'brown',
		'mistyrose',
		'gray',
		'yellow',
		'goldenrod',
		'maroon',
		'orange',
		'aquamarine',
		'salmon',
		'navy',
		'lightseagreen',
		'rosybrown',
		'lightgray',
		customColor
		//state.customColor can go here and then that will get passed in when creating the palette
	];

	// useEffect(
	// 	() => {
	// 		makePalette();
	// 	},
	// 	[ props.currentColor ]
	// );

	const setColor = (color) => {
        props.setCurrentColor(color);
	};

	const makePalette = () => {
		return colors.map((color, i) => {
			const activeColor = props.currentColor === color ? 'Active' : '';
			return (
				<div
					key={i}
					className={`color${i + 1}${activeColor}`}
					onClick={() => setColor(color)}
					style={{ backgroundColor: color }}
				/>
			);
		});
    };
    
    const handleChange = (color, e) => {
        console.log(color.hex)
        props.setCurrentColor(color.hex)
        setCustomColor(color.hex)
    }
    console.log(props.currentColor)
	return (
		<div className="colorPalette">
			<button onClick={() => setDisplayCustomColorPicker(!displayCustomColorPicker)}>Select Custom Color</button>
			{displayCustomColorPicker ? (
				<div className="popover">
					<div className="cover" onClick={() => setDisplayCustomColorPicker(false)} />
					<ChromePicker  color={customColor}onChange={handleChange}/>
				</div>
			) : null}
			{makePalette()}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		currentColor: state.currentColor
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		setCurrentColor: (color) => dispatch(setCurrentColor(color))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ColoringPalette);
