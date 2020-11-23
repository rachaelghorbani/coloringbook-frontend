import React from 'react';
import Particles from 'react-particles-js';

const ParticlesBackground = () => {
	return (
		<Particles
			id="particles-js"
			params={{
				particles: {
					number: {
						value: 600,
						density: {
							enable: true,
							value_area: 1000
						}
					},
					// image: {
					//     src: star,
					//     width: 100,
					//     height: 100
					//   },
					color: {
						value: '#fff'
					},
					opacity: {
						value: 0.5,
						//opacity changes (blinking)
						anim: {
							enable: true
						}
					},
					size: {
						value: 4,
						random: true,
						//size changes (smaller and larger)
						anim: {
							enable: true,
							speed: 3
						}
					},

					line_linked: {
						enable: false
					},
					move: {
						// enable: false,
						speed: 0.2
					}
				}
			}}
		/>
	);
};

export default ParticlesBackground;
