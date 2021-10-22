import { useStaticQuery, graphql } from 'gatsby';

type WordPressMenu = {
	wpMenu: {
		menuItems: {
			nodes: {
				id: string;
				parentId: string | null;
				label: string;
				url: string;
				childItems: {
					nodes: {
						id: string;
						label: string;
						url: string;
					}[];
				};
			}[];
		};
	};
};

const queryMenu = (): WordPressMenu => {
	const data = useStaticQuery(graphql`
		query MenuQuery {
			wpMenu(id: { eq: "dGVybTo3Mw==" }) {
				menuItems {
					nodes {
						id
						parentId
						label
						url
						childItems {
							nodes {
								id
								label
								url
							}
						}
					}
				}
			}
		}
	`);

	return data;
};

export default queryMenu;
