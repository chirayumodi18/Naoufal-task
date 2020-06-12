import React from 'react';
import quote from '../../../images/quote.svg';
import Person1 from '../../../images/landing-page/person1.jpg';

const Index = () => {
	return (
		<div className="blog-section">
			<div className="blog-section-wrapper mt-5">
				<div className="mt-5 quote-wrapper">
					<div className="quote">
						<img src={quote} alt="quote" />
					</div>
					<div className="quote-text">
						The Host Guarantee helped me decide to join Airbnb because I have it to
						fall back on if there's damage or problems.
					</div>
					<div className="quote-smallText">
						Dennis hosts in London for the flexibility it provides
					</div>
					<div className="blog-link">
						Learn how they host
					</div>
				</div>
				<div className="middle-divider" />
				<div className="person-wrapper">
					<div className="person">
						<img src={Person1} alt="person1" />
					</div>
				</div>
			</div>
		</div>
	)
};

export default Index;
