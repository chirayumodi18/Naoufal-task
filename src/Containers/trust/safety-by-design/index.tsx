import React from 'react';
import Person from '../../../images/trust/smile.svg';
import IdCard from '../../../images/trust/id-card.svg';
import RealEstate from '../../../images/trust/real-estate.svg';
import Payment from '../../../images/trust/pay.svg';
import Insurance from '../../../images/trust/insurance.svg';
import Prevention from '../../../images/trust/prevention.svg';

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
							<img src={Person} alt="" />
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
							<img src={IdCard} alt="" />
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
							<img src={RealEstate} alt="" />
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
							<img src={Payment} alt="" />
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
							<img src={Insurance} alt="" />
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
							<img src={Prevention} alt="" />
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
