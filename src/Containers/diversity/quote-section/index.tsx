import React from 'react';

const QuoteSection = () => {
	return (
		<div className="quote-section row text-center">
			<div className="col-center col-12 col-md-7 quote-section-wrapper">
				<div className="quote text-center">
					At the heart of our mission is the idea that people are fundamentally good and that every community is a
					place where you can belong. I sincerely believe that [discrimination] is the greatest challenge we face
					as a company. It cuts to the core of who we are and the values that we stand for.
				</div>
				<div className="avatar-wrapper">
					<img
						src="https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
						alt=""
					/>
				</div>
				<div className="name">Brian Victor</div>
				<div className="name">CEO, Co-founder of Airbnb</div>
			</div>
		</div>
	)
};

export default QuoteSection;
