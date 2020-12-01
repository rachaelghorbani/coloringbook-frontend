import React, { useEffect } from 'react';
import '../css/coloringPalette.css';
import { connect } from 'react-redux';
import { setCurrentColor } from '../redux/actions/coloringActions';

const ColoringPalette = (props) => {
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
		'lightgray'
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
	return (
        <div className="colorPalette">
            {makePalette()}
        </div>
        )
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
