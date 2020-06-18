import React from 'react';
import BreadCrumbs from "../../bread-crumbs";
import HelpSection from "../../help-section";
import { getPanelData } from '../../../../actions/data';

const panelData = getPanelData();

const AirbnbFriendlyProgramme = ({ ...props }) => {
	let url = props.match.url.split('/');
	url = url.filter((u: string) => u)
	return (
		<div className="help-container">
			<BreadCrumbs data={url} history={props.history} />
			<div className="help-section-wrapper">
				<HelpSection data={url} history={props.history} panelData={panelData} />
				<div className="detail-pages">
					<h1>What's the Airbnb Friendly Buildings Programme?</h1>
					<div className="description">
						The Airbnb Friendly Buildings program is a way for landlords, property managers, and homeowners’
						associations to let people in their building host on Airbnb. Through this program,
						Airbnb collaborates with hosts and building owners to:
					</div>
					<div className="description">
						<ul>
							<li>Create specific hosting rules that work for everyone</li>
							<li>Update leases and other agreements to allow residents to host</li>
							<li>Help landlords, residents, and HOAs share portions of the reservation income</li>
						</ul>
					</div>
					<div className="description">
						The Friendly Buildings program gives building owners access to a customized dashboard that shows when
						residents participating in the program are hosting, how many guests are staying with them,
						and how much money is being earned.
					</div>
					<div className="description">
						Building owners can define home sharing terms for participating residents—like blackout dates and pet
						policies—in their building rules. They can then use the dashboard to monitor the hosting activity of
						participating hosts. Learn more about the Friendly Buildings program.
					</div>
					<div className="description">
						To find out if your building is part of the program, check with your building’s management. If you’d like your
						building to join the program, fill out this form.
					</div>
				</div>
			</div>
		</div>
	)
};

export default AirbnbFriendlyProgramme;
