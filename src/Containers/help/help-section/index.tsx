import React, { Fragment, useState, FC } from 'react';
import { History } from 'history'
import { NavLink } from 'react-router-dom';

type propType = {
	data: Array<string>,
	history: History,
	panelData: Array<any>
};

type childrenType = {
	id: string,
	name: string
};

const HelpSection: FC<propType>= ({ data, history, panelData }) => {
	const [selectedPanel, changeSelectedPanel] = useState(Number(data[1]));

	const changePanel = (panel: any) => () => {
		if (selectedPanel === -1 && panel === Number(data[1])) {
			changeSelectedPanel(panel)
			return;
		}
		if (selectedPanel === panel) {
			changeSelectedPanel(-1);
			return;
		}
		changeSelectedPanel(panel)
	}

	const linkId = data[2]

	return (
		<div className="help-section-wrapper__left-section-wrapper">
			<ol>
				{
					panelData.map(data => {
						return (
							<Fragment key={data.id}>
								<li>
									<div className="left-margin" />
									<div onClick={changePanel(data.id)}>
										<div className="heading">
											<NavLink to="#">{data.heading}</NavLink>
										</div>
									</div>
								</li>
								<div>
									<div className="children-wrapper">
										{
											selectedPanel === data.id ? data.children.map((c: childrenType) => {
												return (
													<li key={c.id}>
														<div className="wrap">
															<div className={`left-margin ${linkId === c.id ? 'selected' : ''}`} />
															<div>
																<div className={`heading ${linkId === c.id ? 'selected' : ''}`}>
																	<NavLink to={`/help/${data.id}/${c.id}`}>{c.name}</NavLink>
																</div>
															</div>
														</div>
													</li>
												)
											}) : null
										}
									</div>
								</div>
							</Fragment>
						)
					})
				}
			</ol>
		</div>
	)
};

export default HelpSection;
