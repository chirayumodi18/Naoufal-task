import React from 'react';

const FrequentlyAskedQuestions = () => {
	return (
		<div>
			<div className="heading">
				<h2>Frequently asked questions</h2>
			</div>
			<div className="frequently-asked-questions">
				<div className="frequently-asked-questions-wrapper">
					<div className="question-wrapper">
						<div className="question">
							Who can be an Airbnb host?
						</div>
						<div className="question">
							What is required of guests before booking?
						</div>
						<div className="question">
							How much does it cost to list my space?
						</div>
					</div>
					<div className="question-wrapper">
						<div className="question">
							What protection do I have against property damage?
						</div>
						<div className="question">
							How should I choose my listing’s price?
						</div>
						<div className="question">
							How can Airbnb help me with setting prices?
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default FrequentlyAskedQuestions;
