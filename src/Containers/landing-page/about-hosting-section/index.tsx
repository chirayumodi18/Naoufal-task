import React from 'react';
import HostingImage1 from '../../../images/landing-page/hosting-image1.jpg';
import HostingImage2 from '../../../images/landing-page/hosting-image2.jpg';
import HostingImage3 from '../../../images/landing-page/hosting-image3.jpg';

const Index = () => {
	return (
		<div className="about-hosting">
			<div className="about-hosting-heading mb-3">
				More about hosting
			</div>
			<div className="about-hosting-wrapper">
				<div className="hosting">
					<img src={HostingImage1} alt="hosting" />
				<span className="about-img">
					<div className="title">Setup</div>
					<div className="description">How to start hosting</div>
					<span>Learn more</span>
				</span>

				</div>
				<div className="hosting">
					<img src={HostingImage2} alt="hosting" />
					<span className="about-img">
					<div className="title">Safety</div>
					<div className="description">How Airbnb protects hosts</div>
					<span>Learn more</span>
					</span>
				</div>
				<div className="hosting">
					<img src={HostingImage3} alt="hosting" />
					<span className="about-img">
					<div className="title">Financials</div>
					<div className="description">How you make money on Airbnb</div>
					<span>Learn more</span>
					</span>
				</div>
			</div>
		</div>
	)
};

export default Index;
