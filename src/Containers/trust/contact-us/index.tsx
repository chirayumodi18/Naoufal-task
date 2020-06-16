import React from 'react';
import ProfileCircle from '../../../images/trust/profile-circle.png';

const ContactUs = () => {
	return (
		<div className="margin-between-section">
			<div className="contact-us">
				<div className="contact-us__body">
					<div className="contact-us__body__wrapper">
						<div className="d-table-cell align-middle">
							<div className="contact-us__body__wrapper__heading">
								We’re here if you need us
							</div>
							<div className="contact-us__body__wrapper__description">
								Our global team is standing by 24/7 in 11 different languages to help make things right with
								rebooking assistance, refunds, reimbursements, our $1 million dollar Host Guarantee
								and insurance programmes for both and experiences.
								<br />
								Just contact us if there’s anything you need.
							</div>
						</div>
					</div>
				</div>
				<div className="contact-us__image-wrapper">
					<div className="contact-us__image-wrapper__image">
						<div className="contact-us__image-wrapper__image__image-cell">
							<img src={ProfileCircle} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default ContactUs;
