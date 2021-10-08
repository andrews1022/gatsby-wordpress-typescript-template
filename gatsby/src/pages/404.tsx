import * as React from 'react';
import { graphql, PageProps } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

import { Site } from '../types/types';

type GraphQLResult = {
	site: Site;
};

const NotFoundPage = ({ data, location }: PageProps<GraphQLResult>) => (
	<Layout location={location} title={data.site.siteMetadata.title}>
		<Seo title='404: Not Found' />
		<h1>404: Not Found</h1>
		<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
	</Layout>
);

export default NotFoundPage;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
