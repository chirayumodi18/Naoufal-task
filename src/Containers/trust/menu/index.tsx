import React, { useState } from 'react';

const menuItems = [
	{
		id: 1,
		name: 'Overview',
	},
	{
		id: 2,
		name: 'Travelling',
	},
	{
		id: 3,
		name: 'Hosting',
	},
	{
		id: 4,
		name: 'Community Standards',
	},
	{
		id: 5,
		name: 'Home Safety',
	}
]

type menuItemType = {
	id: number,
	name: string
}

const Menu = () => {
	const [menuSelected, onMenuChange] = useState(1);

	const onChange = (menuItem: menuItemType) => () => onMenuChange(menuItem.id)

	return (
		<>
			<div className="menu-wrapper">
				<div className="menu-wrapper__menu">
					{
						menuItems.map((menuItem) => {
							return (
								<div
									key={menuItem.id}
									className={`menu-wrapper__menu__menu-item ${menuItem.id === menuSelected ? 'selected' : ''}`}
									onClick={onChange(menuItem)}
								>
									<button>{menuItem.name}</button>
								</div>
							)
						})
					}
				</div>
			</div>
			<div className="margin-between-section">
				<div className="menu-description">
					On any given night, 2 million people stay in homes on Airbnb in 100,000 cities all over the world. There
					are more than 6 million listings in 191 countries to choose from  – that’s more than the top five
					hotel chains combined.
				</div>
				<br />
				<div className="menu-description">
					What makes all of that possible? Trust.
				</div>
			</div>
		</>
	)
};

export default Menu;
