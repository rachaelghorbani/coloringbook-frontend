import React from 'react'
import './imageCard.css'

import FoxSvg from './svgs/fox'

const ImageCard = props => {
    const components = {
        "FoxSvg": FoxSvg,
    }

    const Svg = components[props.image.component]

    return (
        <div className={`imageCardDiv${props.image.component}`}>
            <div><h3 style={{marginBottom: 0}}>{props.image.title}</h3></div>
            <Svg size="Thumbnail"/>
            <div>
            <button className='colorButton'>Color Me!</button>
            </div>
        </div>
    )
}

export default ImageCard