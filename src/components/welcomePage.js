import React from 'react';
import ParticlesBackground from './particlesBackground';

const WelcomePage = (props) => {
	return (
		<div className="loginContainer">
			<ParticlesBackground />
			<div style={{ position: 'absolute' }}>
				<p className="welcomeText animTypewriter">
					<strong>Welcome To The Game</strong>
				</p>
			</div>
		</div>
	);
};

export default WelcomePage;
