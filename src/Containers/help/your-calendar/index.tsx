import React from 'react';
import BreadCrumbs from "../bread-crumbs";
import HelpSection from "../help-section";
import { getPanelData } from '../../../actions/data';

const panelData = getPanelData();

const YourCalendar = ({ ...props }) => {
	let url = props.match.url.split('/');
	url = url.filter((u: string) => u)
	return (
		<div className="help-container">
			<BreadCrumbs data={url} history={props.history} />
			<div className="help-section-wrapper">
				<HelpSection data={url} history={props.history} panelData={panelData} />
				<h1>Your Calendar</h1>
			</div>
		</div>
	)
};

export default YourCalendar;
