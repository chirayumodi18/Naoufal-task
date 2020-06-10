import React, { Fragment } from 'react';
import greenCorrect from '../../../images/correct-green.svg';

const Covered = () => {
	return (
		<Fragment>
			<div className="heading">
				<h2>We’ve got you covered</h2>
			</div>
			<div className="covered-body">
				<div className="covered-wrapper">
					<div className="covered-text mt-4">
						<p className="mb-3">
							We know it’s a priority to trust the people staying in your home. Airbnb allows you to set strict
							requirements for who can book and to get to know guests before their stay. If something does come up,
							though, we've got you covered. With our Host Guarantee covering property damage and our Host
							Protection Insurance for liability, you’re supported as a host throughout.
						</p>
						<span>
              Learn how Airbnb protects hosts
            </span>
					</div>
					<div className="middle-divider" />
					<div className="covered-points">
						<div className="points">
							<img src={greenCorrect} alt="correct" />
							<p>Ability to require government ID before booking</p>
						</div>
						<div className="points">
							<img src={greenCorrect} alt="correct" />
							<p>House Rules guests must agree to</p>
						</div>
						<div className="points">
							<img src={greenCorrect} alt="correct" />
							<p>Chance to read reviews from past trips</p>
						</div>
						<div className="points">
							<img src={greenCorrect} alt="correct" />
							<p>Free $1M protection for property damage</p>
						</div>
						<div className="points">
							<img src={greenCorrect} alt="correct" />
							<p>Free $1M liability insurance</p>
						</div>
						<div className="points">
							<img src={greenCorrect} alt="correct" />
							<p>24/7 global customer support</p>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
};

export default Covered;
