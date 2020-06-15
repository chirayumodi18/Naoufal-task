import React, { FC, Fragment } from 'react';
import { History } from 'history';

type propType = {
	data: Array<string>,
	history: History,
}

const BreadCrumbs: FC<propType>= ({ data, history }) => {
	const onBreadCrumbClick = (index: number) => () => {
		const url = data.splice(0, index + 1).join('/');
		debugger
		history.push(`/help/${url}`);
	};
	return (
		<div className="bread-crumbs-wrapper">
			<nav>
				<ol>
					<li>
						<span className="data" onClick={() => history.push('/help')}>Help</span>
						<span className="arrow" />
						{
							data.map((u, index) => {
								if (!u) return null
								return (
									<Fragment key={index}>
										<span className="data" onClick={onBreadCrumbClick(index)}>{u}</span>
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
