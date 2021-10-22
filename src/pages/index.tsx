import React from 'react';
import { Link, graphql, PageProps } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

import { Site } from '../types/types';

// import Heading from '../components/Heading';

type GraphQLResult = {
	site: Site;
	allContentfulPost: {
		edges: {
			node: {
				author: string;
				slug: string;
				subtitle: string;
				title: string;
			};
		}[];
	};
};

const BlogIndex = ({ data, location }: PageProps<GraphQLResult>) => {
	// const siteTitle = data.site.siteMetadata?.title || `Title`;
	// const posts = data.allContentfulPost.edges;

	// if (posts.length === 0) {
	// 	return (
	// 		<Layout location={location} title='Home'>
	// 			<Seo title='All posts' />
	// 			<p>No blog posts found.</p>
	// 		</Layout>
	// 	);
	// }

	const placeholder = 'hi';

	return (
		<Layout location={location} title='Home'>
			<Seo title='Home' />

			<h1>Hello from the Home page!</h1>
		</Layout>
	);
};

export default BlogIndex;

// export const pageQuery = graphql`
// 	query ContentfulPostQuery {
// 		site {
// 			siteMetadata {
// 				title
// 			}
// 		}
// 		allContentfulPost {
// 			edges {
// 				node {
// 					title
// 					subtitle
// 					author
// 					slug
// 				}
// 			}
// 		}
// 	}
// `;
