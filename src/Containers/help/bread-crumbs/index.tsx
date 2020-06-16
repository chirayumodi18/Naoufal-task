import React, { FC, Fragment } from 'react';
import { History } from 'history';
import { NavLink } from 'react-router-dom';

type propType = {
	data: Array<string>,
	history: History,
}

const BreadCrumbs: FC<propType>= ({ data, history }) => {
	const onBreadCrumbClick = (index: number) => () => {
		const url = data.splice(0, index + 1).join('/');
		history.push(`/${url}`);
	};
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
								return (
									<Fragment key={index}>
										<span
											className={`data ${data.length - 1 === index ? 'selected' : '' }`}
											onClick={onBreadCrumbClick(index)}
										>
											{u}
										</span>
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
