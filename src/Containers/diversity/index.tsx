import React from 'react';
import CoverImage from './cover-image';
import QuoteSection from './quote-section';
import DiscriminationSection from './discrimination-section';
import HostDescriptionSection from './host-description-section';
import ExampleSection from './example-section';
import SuccessToolsSection from './success-tools-section';
import PartnersSection from './partners-section';
import WorkplaceSection from './workplace-section';
import './diversity.scss';

const LineDivider = () => <hr className="line-divider" />;

const PhotoSection = () => <div className="photo-section" />

const PhotoSection2 = () => <div className="photo-section2" />

const Diversity = () => {
	return (
		<div className="diversity">
			<CoverImage />
			<div className="page-container">
				<QuoteSection />
				<LineDivider />
				<DiscriminationSection />
				<LineDivider />
				<HostDescriptionSection />
				<ExampleSection />
				<LineDivider />
				<SuccessToolsSection />
			</div>
			<PhotoSection />
			<div className="page-container">
				<PartnersSection />
			</div>
			<PhotoSection2 />
			<div className="page-container">
				<WorkplaceSection />
			</div>
		</div>
	)
};

export default Diversity;
