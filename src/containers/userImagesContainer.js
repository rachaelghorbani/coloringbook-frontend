import React from 'react'
import {connect} from 'react-redux'
import ImageCard from '../components/imageCard'
import ParticlesBackground from '../components/particlesBackground'
import '../css/allImages.css'

const UserImagesContainer = props => {
    const renderUserImages = () => {
        return props.user.user_images.map(ui => {
            return (
                <ImageCard key={ui.id} image={ui} fillColors={ui.fill_colors}/>
            )
        })
    }
    console.log(props.user)
    return (
 
        <div className="loginContainer">
			<ParticlesBackground />
			<h1 className="userImagesHeader">{`${props.user.username}'s Images`}</h1>
			<div className="cardContainer">
                {renderUserImages()}
                </div>
        </div>
     
       
    
    )
}


const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(UserImagesContainer)