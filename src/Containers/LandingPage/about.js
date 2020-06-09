import React from 'react';

const AboutPage = () => {
	return (
		<div className="about-section">
			<div className="heading">
				<h2>About Airbnb</h2>
			</div>
			<div className="marketing-wrapper mt-5">
				<div className="container d-flex wrapper my-5">
					<div className="marketing">
						<h3>What is Airbnb?</h3>
						<p>
							Airbnb connects people with places to stay and things to do around the world. The community is powered
							by hosts, who provide their guests with the unique opportunity to travel like a local.
						</p>
					</div>
					<div className="marketing">
						<h3>What is hosting?</h3>
						<p>
							If you have an extra room, entire home, or expertise, you can earn money by sharing it with anyone in
							the world. You can host your home, activity, or do both. When you host is up to you.
						</p>
						<span>
							Learn more about experience hosting
						</span>
					</div>
				</div>
			</div>
		</div>
	)
};

export default AboutPage;
