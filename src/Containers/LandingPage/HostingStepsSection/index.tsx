import React from 'react';
import correct from '../../../images/correct-circle.svg';

const HostingSteps = () => {
	return (
		<div className="hosting-steps container">
			<div className="heading">
				<h2>Hosting in 3 steps</h2>
			</div>
			<div className="hosting-steps-wrapper mt-5">
				<div className="hosting-steps">
					<div className="step">
						<div className="step-margin">
							<div>
								<img src={correct} alt="correct" />
							</div>
							<div className="heading">
								<h3>List your space for free</h3>
							</div>
							<div className="description">
								<p>
									Share any space without sign-up charges, from a shared living room to a second home and
									everything in-between.
								</p>
							</div>
						</div>
					</div>
					<div className="step">
						<div className="step-margin">
							<div>
								<img src={correct} alt="correct" />
							</div>
							<div className="heading">
								<h3>Decide how you want to host</h3>
							</div>
							<div className="description">
								<p>
									Choose your own schedule, prices, and requirements for guests. We’re there to help along the way.
								</p>
							</div>
						</div>
					</div>
					<div className="step">
						<div className="step-margin">
							<div>
								<img src={correct} alt="correct" />
							</div>
							<div className="heading">
								<h3>Welcome your first guest</h3>
							</div>
							<div className="description">
								<p>
									Once your listing is live, qualified guests can reach out. You can message them with any
									questions before their stay.
								</p>
							</div>
							<div className="link">
								Learn how to start hosting
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default HostingSteps;
