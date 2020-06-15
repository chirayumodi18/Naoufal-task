import React from 'react';
import Heading from './heading';
import Menu from './menu';
import SafetyByDesign from './safety-by-design';
import WhatToExpect from './what-to-expect';
import ContactUs from './contact-us';
import HelpCenter from './help-center';
import './trust.scss';

const Divider = () => <hr className="divider" />

const Trust = () => {
	return (
		<div className="trust">
			<Heading />
			<Menu />
			<Divider />
			<SafetyByDesign />
			<Divider />
			<WhatToExpect />
			<Divider />
			<ContactUs />
			<Divider />
			<HelpCenter />
		</div>
	)
};

export default Trust;
