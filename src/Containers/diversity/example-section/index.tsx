import React from 'react';

const ExampleSection = () => {
	return (
		<div className="row text-left space-4 space-top-8 example-section">
			<div className="col-lg-6 col-md-6 col-sm-12 space-6">
				<div className="example-section__wrapper">
					<div className="example-section__wrapper__background-cover image-1" />
					<p className="example-section__wrapper__header">
						<strong>Cultivating unbiased hospitality</strong>
					</p>
					<p className="example-section__wrapper__description">
						Our hosts have the power to end discrimination through experiences of human connection.
					</p>
				</div>
			</div>
			<div className="col-lg-6 col-md-6 col-sm-12 space-6">
				<div className="example-section__wrapper">
					<div className="example-section__wrapper__background-cover image-2" />
					<p className="example-section__wrapper__header">
						<strong>A World of Belonging</strong>
					</p>
					<p className="example-section__wrapper__description">
						Our global community never fails to amaze us with their stories of kindness and connection. Our
						#OneLessStranger movement shares these moments of empathy and discovery with the world.
					</p>
				</div>
			</div>
			<div className="col-lg-6 col-md-6 col-sm-12 space-6">
				<div className="example-section__wrapper">
					<div className="example-section__wrapper__background-cover image-3" />
					<p className="example-section__wrapper__header">
						<strong>Old Boots Sold, New Love Found</strong>
					</p>
					<p className="example-section__wrapper__description">
						Our community is what makes Airbnb possible. This story of love and pride is a perfect example
						of how our hosts and guests inspire us to build a better platform to enable global belonging.
					</p>
				</div>
			</div>
			<div className="col-lg-6 col-md-6 col-sm-12 space-6">
				<div className="example-section__wrapper">
					<div className="example-section__wrapper__background-cover image-4" />
					<p className="example-section__wrapper__header">
						<strong>Visualising Our Unity</strong>
					</p>
					<p className="example-section__wrapper__description">
						This portrait series was led by our Black@ Airfinity group and allies, who are also a part of our global
						community of hosts and guests, to spark conversations about racial discrimination and #BlackLivesMatter.
					</p>
				</div>
			</div>
		</div>
	)
};

export default ExampleSection;
