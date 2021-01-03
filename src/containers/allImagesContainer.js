import React, { useEffect } from 'react';
import { fetchAllImages } from '../redux/actions/imageActions';
import { connect } from 'react-redux';
import ImageCard from '../components/imageCard';
import ParticlesBackground from '../components/particlesBackground';
import '../css/allImages.css'

const AllImagesContainer = (props) => {
	useEffect(() => {
		props.fetchAllImages();
	}, []);

	const renderImages = () => {
        if(props.allImages.length > 0){
            return props.allImages.map((img) => {
                //will return the card component here. will have to pass down the svg
                return (
                    <ImageCard key={img.id} image={img} />
                );
            });
        }
	};
	//should display all thumbnails here
	return (
		<div className="loginContainer">
			<ParticlesBackground />
            
			<h1 className='selectImageHeader'>Select An Image to Color</h1>
            <h4 className='selectImageLink'>These beautiful images have been adapted from Johanna Brasford's <a target="_blank"href="https://www.amazon.com/dp/1780674880/ref=cm_sw_em_r_mt_dp_jet2FbQJ23V2M">Enchanted Forest</a></h4>
			<div className="cardContainer">
                {renderImages()}
                </div>
		</div>
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
