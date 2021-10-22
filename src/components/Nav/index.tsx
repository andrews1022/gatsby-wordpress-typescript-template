import React from 'react';
import { Link } from 'gatsby';

// graphql query
import queryMenu from '../../graphql/queryMenu';

const Nav = () => {
	const menu = queryMenu();

	// console.log(menu);

	return (
		<nav>
			<ul>
				{menu.wpMenu.menuItems.nodes.map((el) =>
					!el.parentId ? (
						<li key={el.id}>
							<Link to={el.label === 'Home' ? '/' : el.url}>{el.label}</Link>
						</li>
					) : null
				)}
			</ul>
		</nav>
	);
};

export default Nav;
