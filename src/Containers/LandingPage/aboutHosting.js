import React from 'react';
import HostingImage1 from '../../images/hosting-image1.jpg';
import HostingImage2 from '../../images/hosting-image2.jpg';
import HostingImage3 from '../../images/hosting-image3.jpg';

const AboutHosting = () => {
	return (
		<div className="about-hosting">
			<div className="about-hosting-heading">
				More about hosting
			</div>
			<div className="about-hosting-wrapper">
				<div className="hosting">
					<img src={HostingImage1} alt="hosting-image" />
					<div className="title">Setup</div>
					<div className="description">How to start hosting</div>
					<span>Learn more</span>
				</div>
				<div className="hosting">
					<img src={HostingImage2} alt="hosting-image" />
					<div className="title">Safety</div>
					<div className="description">How Airbnb protects hosts</div>
					<span>Learn more</span>
				</div>
				<div className="hosting">
					<img src={HostingImage3} alt="hosting-image" />
					<div className="title">Financials</div>
					<div className="description">How you make money on Airbnb</div>
					<span>Learn more</span>
				</div>
			</div>
		</div>
	)
};

export default AboutHosting;
