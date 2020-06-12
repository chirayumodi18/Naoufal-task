import React from 'react';
import quote from '../../../images/quote.svg';
import Person3 from '../../../images/landing-page/person3.jpg';

const BlogSection2 = () => {
	return (
		<div className="blog-section">
			<div className="blog-section-wrapper mt-5">
				<div className="person-wrapper order-1 order-md-0">
					<div className="person">
						<img src={Person3} alt="person1" />
					</div>
				</div>
				<div className="middle-divider" />
				<div className="mt-5 quote-wrapper order-0 order-md-1 quote-right">
					<div className="quote">
						<img src={quote} alt="quote" />
					</div>
					<div className="quote-text">
						Hosting has helped me pay for a new kitchen and other upgrades.
					</div>
					<div className="quote-smallText">
						Tessa hosts in London to earn extra money
					</div>
					<div className="blog-link">
						Learn how they host
					</div>
				</div>
			</div>
		</div>
	)
};

export default BlogSection2;
