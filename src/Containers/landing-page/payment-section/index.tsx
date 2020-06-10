import React from 'react';

const Payment = () => {
	return (
		<div className="payment-steps container">
			<div className="heading">
				<h2>Payments made simple</h2>
			</div>
			<div className="payment-steps-wrapper">
				<div className="payment-steps">
					<div className="step">
						<div className="step-margin ml-0">
							<div className="heading">
								<h3>Charge what you want</h3>
							</div>
							<div className="description">
								<p>
									You always get to pick your price. Need help? We have tools to help you match demand in your area.
								</p>
							</div>
						</div>
					</div>
					<div className="step">
						<div className="step-margin ml-0">
							<div className="heading">
								<h3>Pay low fees</h3>
							</div>
							<div className="description">
								<p>
									There’s no cost to sign up. Airbnb generally charges hosts a fixed 3% per reservation, among the
									lowest fees in the industry.
								</p>
							</div>
						</div>
					</div>
					<div className="step">
						<div className="step-margin ml-0">
							<div className="heading">
								<h3>Get paid quickly</h3>
							</div>
							<div className="description">
								<p>
									Once a guest checks in, we can send your money by PayPal, direct deposit, or other available methods.
								</p>
							</div>
							<div className="link">
								Learn how to make money on Airbnb
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Payment;
