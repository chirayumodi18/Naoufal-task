import React, { FC } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { History } from 'history';

import Links from './help-pages/index';

type propTypes = {
	data: Array<string>,
	panelData: Array<any>,
	history: History
};

const DisplaySection: FC<propTypes> = ({ ...props }) => {
	const panelId = props.data[1];
	const linkId = props.data[2];
	const page = props.data[3];
	const selectedPanel = props.panelData.find(panel => panel.id === Number(panelId));
	const selectedLink = selectedPanel && selectedPanel.children.find((c: any) => c.id === linkId);
	if (!selectedPanel && panelId !== 'hosting') {
		return <h1>Welcome to Help section</h1>
	};
	return (
		<div className="help-section-wrapper__display-section">
			{
				panelId === 'hosting' ? (
					<div>
						<h1>Hosting</h1>
					</div>
				) : page ? (
					<Switch>
						<Route exact path={`/help/${panelId}/${linkId}/whats-the-airbnb-friendly-buildings-programme`} component={Links.AirbnbFriendlyProgramme} />
						<Route exact path={`/help/${panelId}/${linkId}/who-can-host-on-airbnb`} component={Links.WhoCanHostOnAirbnb} />
					</Switch>
				) : linkId ? (
					<div className="help-section-wrapper__display-section__link-display">
						<h1>{selectedLink.name}</h1>
						<div className="help-section-wrapper__display-section__link-display__description">
							{selectedLink.description}
						</div>
						<div className="help-section-wrapper__display-section__link-display__link-wrapper">
							{
								(selectedLink.links || []).map((link: any) => {
									return (
										<div key={link.linkId} className="help-section-wrapper__display-section__link-display__link-wrapper__links">
											{link.linkName}
											{
												(link.links || []).map((l: any) => {
													return (
														<div
															key={linkId}
															className="help-section-wrapper__display-section__link-display__link-wrapper__links__link"
														>
															<NavLink to={`/help/${panelId}/${linkId}/${l.linkId}`}>{l.linkName}</NavLink>
														</div>
													)
												})
											}
										</div>
									)
								})
							}
						</div>
					</div>
				) : (
					<div className="help-section-wrapper__display-section__panel-display">
						<h1>{selectedPanel.heading}</h1>
						<div className="help-section-wrapper__display-section__panel-display__panel-wrapper">
							{
								selectedPanel.children.map((sp: any) => {
									return (
										<div key={sp.id} className="help-section-wrapper__display-section__panel-display__panel-wrapper__panel">
											<h2>
												<NavLink to={`/help/${panelId}/${sp.id}`}>{sp.name}</NavLink>
											</h2>
											{
												(sp.links || []).map((link: { linkId: string, linkName: string }) => {
													return (
														<div
															key={link.linkId}
															className="help-section-wrapper__display-section__panel-display__panel-wrapper__panel__link"
														>
															{link.linkName}
														</div>
													)
												})
											}
										</div>
									)
								})
							}
						</div>
					</div>
				)
			}
		</div>
	)
};

export default DisplaySection;
