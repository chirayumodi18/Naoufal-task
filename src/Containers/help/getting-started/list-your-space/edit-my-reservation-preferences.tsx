import React from 'react';
import BreadCrumbs from "../../bread-crumbs";
import HelpSection from "../../help-section";
import { getPanelData } from '../../../../actions/data';

const panelData = getPanelData();

const EditMyReservationPreferences = ({ ...props }) => {
	let url = props.match.url.split('/');
	url = url.filter((u: string) => u)
	return (
		<div className="help-container">
			<BreadCrumbs data={url} history={props.history} />
			<div className="help-section-wrapper">
				<HelpSection data={url} history={props.history} panelData={panelData} />
				<div className="detail-pages">
					<h1>How do I edit my reservation preferences?</h1>
				</div>
			</div>
		</div>
	)
};

export default EditMyReservationPreferences;
