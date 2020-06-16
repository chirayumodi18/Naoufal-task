import React, { Fragment, useState, FC } from 'react';
import { History } from 'history'

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
	const [selectedPanel, changeSelectedPanel] = useState(Number(data[2]));

	const changePanel = (panel: any, isLink: Boolean) => () => {
		debugger
		if (selectedPanel === -1 && panel === Number(data[2])) {
			changeSelectedPanel(panel)
			return;
		}
		if (selectedPanel === panel) {
			changeSelectedPanel(-1);
			return;
		}
		if (!isLink) {
			changeSelectedPanel(panel)
		}
		if (isLink) history.push(`/help/${panel}`);
	}

	const linkId = data[3]

	return (
		<div className="help-section-wrapper__left-section-wrapper">
			<ol>
				{
					panelData.map(data => {
						return (
							<Fragment key={data.id}>
								<li>
									<div className="left-margin" />
									<div onClick={changePanel(data.id, false)}>
										<div className="heading">
											<button>{data.heading}</button>
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
															<div onClick={changePanel(`${data.id}/${c.id}`, true)}>
																<div className="heading">
																	<span>{c.name}</span>
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
