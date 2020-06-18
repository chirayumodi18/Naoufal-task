import React from 'react';
import BreadCrumbs from "../../bread-crumbs";
import HelpSection from "../../help-section";
import {NavLink} from "react-router-dom";
import { getPanelData } from '../../../../actions/data';
import "../../help.scss";

const panelData = getPanelData();

const ListYourSpace = ({ ...props }) => {
	let url = props.match.url.split('/');
	url = url.filter((u: string) => u)
	const panelId = url[1];
	const linkId = url[2];
	return (
		<div className="help-container">
			<BreadCrumbs data={url} history={props.history} />
			<div className="help-section-wrapper">
				<HelpSection data={url} history={props.history} panelData={panelData} />
				<div className="detail-pages">
					<h1>List your space</h1>
					<div className="description mb-5">
						Resources to guide you through creating a listing for your home on Airbnb
					</div>
					<div className="description">
						<div className="navigation">
							<NavLink to={`/help/${panelId}/${linkId}/edit-my-reservation-preferences`}>
								How do I edit my reservation preferences?
							</NavLink>
						</div>
						<div className="navigation">
							<NavLink to={`/help/${panelId}/${linkId}/make-my-space-more-accessible-for-guests-with-disabilities`}>
								How can I make my space more accessible for guests with disabilities?
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default ListYourSpace;
