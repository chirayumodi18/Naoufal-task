import React from 'react';

const SafetyByDesign = () => {
	return (
		<div className="margin-between-section">
			<div className="safety-design-wrapper">
				<h1>
					Safety by design
				</h1>
				<div className="safety-design-wrapper__description">
					<div>
						Airbnb is designed with safety – both online and off – in mind
					</div>
				</div>
				<div className="safety-design-wrapper__safety-points-wrapper">
					<div className="safety-design-wrapper__safety-points-wrapper">
						<div className="safety-design-wrapper__safety-points-wrapper__safety-points">
							<img src="https://a0.muscache.com/airbnb/static/packages/risk-scoring.5d7f7631.svg" alt="" />
							<div  className="safety-design-wrapper__safety-points-wrapper__safety-points__body">
								<div className="safety-design-wrapper__safety-points-wrapper__safety-points__body__heading">
									<h2>Risk scoring</h2>
								</div>
								<div className="safety-design-wrapper__safety-points-wrapper__safety-points__body__description">
									Every Airbnb reservation is scored for risk before it’s confirmed. We use predictive analytics
									and machine learning to instantly evaluate hundreds of signals that help us flag and
									investigate suspicious activity before it happens.
								</div>
							</div>
						</div>
						<div className="safety-design-wrapper__safety-points-wrapper__safety-points">
							<img src="https://a0.muscache.com/airbnb/static/packages/backgroundcheck.5a6bf8c9.svg" alt="" />
							<div  className="safety-design-wrapper__safety-points-wrapper__safety-points__body">
								<div className="safety-design-wrapper__safety-points-wrapper__safety-points__body__heading">
									<h2>Watchlist & background checks</h2>
								</div>
								<div className="safety-design-wrapper__safety-points-wrapper__safety-points__body__description">
									While no screening system is perfect, globally we check hosts and guests against regulatory,
									terrorist and sanction watchlists. For hosts and guests in the United States, we also
									conduct background checks.
								</div>
							</div>
						</div>
						<div className="safety-design-wrapper__safety-points-wrapper__safety-points">
							<img src="https://a0.muscache.com/airbnb/static/packages/preparedness.8cbe590d.svg" alt="" />
							<div  className="safety-design-wrapper__safety-points-wrapper__safety-points__body">
								<div className="safety-design-wrapper__safety-points-wrapper__safety-points__body__heading">
									<h2>Preparedness</h2>
								</div>
								<div className="safety-design-wrapper__safety-points-wrapper__safety-points__body__description">
									We run safety workshops with hosts and leading local experts and encourage hosts to provide
									guests with important local information. We also give any host who wants one a free smoke
									and carbon monoxide detector for their home.
								</div>
							</div>
						</div>
					</div>
					<div className="safety-design-wrapper__safety-points-wrapper">
						<div className="safety-design-wrapper__safety-points-wrapper__safety-points">
							<img src="https://a0.muscache.com/airbnb/static/packages/secure-payment.52a19e98.svg" alt="" />
							<div  className="safety-design-wrapper__safety-points-wrapper__safety-points__body">
								<div className="safety-design-wrapper__safety-points-wrapper__safety-points__body__heading">
									<h2>Secure payments</h2>
								</div>
								<div className="safety-design-wrapper__safety-points-wrapper__safety-points__body__description">
									Our secure platform ensures your money gets to the host – that’s why we ask you to always
									pay through Airbnb and never transfer money or pay someone directly.
								</div>
							</div>
						</div>
						<div className="safety-design-wrapper__safety-points-wrapper__safety-points">
							<img
								src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDcgMTI1Ij48cGF0aCBkPSJNNjgsOTBIMTZhNS4wNyw1LjA3LDAsMCwxLTUtNS4xVjE3LjFBNS4wNyw1LjA3LDAsMCwxLDE2LDEySDY4YTUuMDcsNS4wNywwLDAsMSw1LDUuMVY4NC45QTUuMDcsNS4wNywwLDAsMSw2OCw5MCIgZmlsbD0iIzAwZDFjMSIvPjxwYXRoIGQ9Ik00OCwxMDZhNiw2LDAsMSwxLTYtNiw2LDYsMCwwLDEsNiw2IiBmaWxsPSIjZmZiNDAyIi8+PHBhdGggZD0iTTg0LDgxLjQ3djI5LjU5QTEyLjEsMTIuMSwwLDAsMSw3MS43OCwxMjNIMTIuMjJBMTIuMSwxMi4xLDAsMCwxLDAsMTExLjA1VjEyLjk1QTEyLjEsMTIuMSwwLDAsMSwxMi4yMiwxSDcxLjc4QTEyLjEsMTIuMSwwLDAsMSw4NCwxMi45NXY2LjkxYTEsMSwwLDAsMS0yLDBWMTIuOTVBMTAuMSwxMC4xLDAsMCwwLDcxLjc4LDNIMTIuMjJBMTAuMSwxMC4xLDAsMCwwLDIsMTIuOTV2OTguMTFBMTAuMSwxMC4xLDAsMCwwLDEyLjIyLDEyMUg3MS43OEExMC4xLDEwLjEsMCwwLDAsODIsMTExLjA1VjgxLjQ3YTEsMSwwLDAsMSwyLDBabTIzLTMwQTI0LjU0LDI0LjU0LDAsMSwxLDk4LjUxLDMzbDYuNjEtMTIuNDRhMSwxLDAsMSwxLDEuNzcuOTRMMTAwLDM0LjM5QTI0LjQxLDI0LjQxLDAsMCwxLDEwNyw1MS41Wm0tMiwwYTIyLjQxLDIyLjQxLDAsMCwwLTYtMTUuMjVMODUuNTIsNjEuNjdBNC40MSw0LjQxLDAsMCwxLDgxLjkzLDY0aC0uMzVBNC40Myw0LjQzLDAsMCwxLDc4LDYyLjIxTDcwLjIsNTEuNjlBMSwxLDAsMSwxLDcxLjgsNTAuNUw3OS42MSw2MWEyLjQ5LDIuNDksMCwwLDAsNC4xNS0uMjlMOTcuNTQsMzQuNzlBMjIuNDksMjIuNDksMCwxLDAsMTA1LDUxLjVaIiBmaWxsPSIjNTY1YTVjIi8+PC9zdmc+Cg=="
								alt=""
							/>
							<div  className="safety-design-wrapper__safety-points-wrapper__safety-points__body">
								<div className="safety-design-wrapper__safety-points-wrapper__safety-points__body__heading">
									<h2>Account protection</h2>
								</div>
								<div className="safety-design-wrapper__safety-points-wrapper__safety-points__body__description">
									We take a number of measures to safeguard your Airbnb account, like requiring multi-factor
									authentication when a login is attempted from a new phone or computer and sending you
									account alerts when changes are made.
								</div>
							</div>
						</div>
						<div className="safety-design-wrapper__safety-points-wrapper__safety-points">
							<img src="https://a0.muscache.com/airbnb/static/packages/safety.ace320e7.svg" alt="" />
							<div  className="safety-design-wrapper__safety-points-wrapper__safety-points__body">
								<div className="safety-design-wrapper__safety-points-wrapper__safety-points__body__heading">
									<h2>Scam prevention</h2>
								</div>
								<div className="safety-design-wrapper__safety-points-wrapper__safety-points__body__description">
									Always pay and communicate directly through the Airbnb website or app. As long as you stay on
									Airbnb throughout the entire process – from communication through to booking and
									payment – you’re protected by our multi-layer defence strategy.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default SafetyByDesign;
