import React from 'react';
import NextImage from '../../../images/next.svg';

const items = [
	'How do I know if a listing is available?', 'How do I book an experience?', 'How do reviews work?',
	'How do I view and send messages?', 'How do I create a listing on Airbnb?', 'How do I create an experience?'
]

const HelpCenter = () => {
	return (
		<div className="margin-between-section">
			<div className="help-center">
				<div className="help-center__heading">
					Or find the answers to anything you need in our Help Centre
				</div>
				<div className="help-center__wrapper">
					{
						items.map((item, index) => {
							return (
								<div key={index} className="help-center__wrapper__item-wrapper">
									<div className="help-center__wrapper__item-wrapper__item">
										<div className="align" />
										<div className="help-center__wrapper__item-wrapper__item__text-wrapper">
											<div className="help-center__wrapper__item-wrapper__item__text-wrapper__text">
												{item}
											</div>
											<div className="help-center__wrapper__item-wrapper__item__arrow-wrapper">
												<div className="help-center__wrapper__item-wrapper__item__arrow-wrapper__arrow">
													<img src={NextImage} alt="next" />
												</div>
											</div>
										</div>
										<div className="help-center__wrapper__item-wrapper__item__space" />
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
		</div>
	)
};

export default HelpCenter;
