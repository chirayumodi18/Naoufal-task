import React, { FC, Fragment, useEffect } from 'react';
import { History } from 'history';
import { NavLink } from 'react-router-dom';
import { getPanelData } from '../../../actions/data';

type propType = {
	data: Array<string>,
	history: History,
}

const BreadCrumbs: FC<propType>= ({ data, history }) => {
	const onBreadCrumbClick = (index: number) => () => {
		const url = data.splice(0, index + 1).join('/');
		history.push(`/${url}`);
	};
	const panelData = getPanelData();

	let selectedPanel: any;
	let selectedSubPanel: any;
	const getPanelNames = (index: number, value: string) => {
		if (index === 1) {
			selectedPanel = panelData.find((d: any) => d.id.toString() === data[1])
			return selectedPanel ? selectedPanel.heading : value
		}
		if (index === 2) {
			selectedSubPanel = selectedPanel && selectedPanel.children.find((d: any) => d.id.toString() === data[2])
			return selectedSubPanel ? selectedSubPanel.name : value
		}
		return value;
	};

	let str:string = '/help';
	return (
		<div className="bread-crumbs-wrapper">
			<nav>
				<ol>
					<li>
						<NavLink to="/help" className="data">Help Center</NavLink>
						{data.length > 1 && <span className="arrow" />}
						{data.length > 1 && (
							<>
								<NavLink to="/help/hosting" className="data">Hosting</NavLink>
								{data.length > 1 && <span className="arrow" />}
							</>
						)}
						{
							data.map((u, index) => {
								if (['hosting', 'help'].includes(u)) return null
								str += `/${u}`;
								return (
									<Fragment key={index}>
										<NavLink
											to={str}
											className={`data ${data.length - 1 === index ? 'selected' : '' }`}
											onClick={onBreadCrumbClick(index)}
										>
											{getPanelNames(index, u)}
										</NavLink>
										{data.length - 1 !== index && <span className="arrow" />}
									</Fragment>
								)
							})
						}
					</li>
				</ol>
			</nav>
		</div>
	)
};

export default BreadCrumbs;
