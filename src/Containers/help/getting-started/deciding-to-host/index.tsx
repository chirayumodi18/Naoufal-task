import React from 'react';
import { NavLink } from 'react-router-dom';
import BreadCrumbs from "../../bread-crumbs";
import HelpSection from "../../help-section";
import { getPanelData } from '../../../../actions/data';
import "../../help.scss";

const panelData = getPanelData();

const DecidingToHost = ({ ...props }) => {
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
					<h1>Deciding To host</h1>
					<div className="description">
						Understand Airbnb’s quality standards and the legal requirements for hosts. Learn how to prepare for
						hosting by creating a listing, talking to neighbours, and communicating with potential guests.
					</div>
					<div className="description">
						<h2>New hosts</h2>
						<div className="navigation">
							<NavLink to={`/help/${panelId}/${linkId}/Whats-the-airbnb-friendly-buildings-programme`}>
								What's the Airbnb Friendly Buildings Programme?
							</NavLink>
						</div>
						<div className="navigation">
							<NavLink to={`/help/${panelId}/${linkId}/who-can-host-on-airbnb?`}>
								Who can host on Airbnb?
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default DecidingToHost;
