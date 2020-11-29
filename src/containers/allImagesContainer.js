import React, { useEffect } from 'react';
import { fetchAllImages } from '../redux/actions/imageActions';
import { connect } from 'react-redux';
import ImageCard from '../components/imageCard';
import ParticlesBackground from '../components/particlesBackground';
import './allImages.css';

const AllImagesContainer = (props) => {
	useEffect(() => {
		props.fetchAllImages();
	}, []);

	const renderImages = () => {
		return props.allImages.map((img) => {
			//will return the card component here. will have to pass down the svg
			return (
            <ImageCard key={img.id} image={img} />
            );
		});
	};
	//should display all thumbnails here
	console.log(props.allImages);
	return (
		<div className="loginContainer">
			<ParticlesBackground />
			<h1 style={{ position: 'absolute', top: 0 }}>Select An Image to Color</h1>
			<div className='cardContainer'>

			{/* <div className='cardContainer'> */}
			{/* <div className='cardContainerHeader'>
                    <h1>Select An Image to Color</h1>
                </div> */}
			{/* <div style={{position: "absolute", height: "100vh", width: '80%',display: "flex",alignItems: "start"}}> */}
			{/* <div className='cardContainer'>  */}
			{renderImages()}
          
		</div>
		 </div>
		// </div>
	);
};

const mapStateToProps = (state) => {
	return {
		allImages: state.allImages
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		fetchAllImages: () => dispatch(fetchAllImages())
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(AllImagesContainer);
