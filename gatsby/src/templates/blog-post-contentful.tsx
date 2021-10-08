// import * as React from 'react';
// import { graphql, PageProps } from 'gatsby';

// import Bio from '../components/Bio';
// import Layout from '../components/Layout';
// import Seo from '../components/Seo';

// import { Site } from '../types/types';

// import { Title, Subtitle, Copy } from '../styled-components/Styles';

// type GraphQLResult = {
// 	site: Site;
// 	contentfulPost: {
// 		author: string;
// 		content: {
// 			raw: string;
// 		};
// 		subtitle: string;
// 		title: string;
// 	};
// };

// const BlogPostContentfulTemplate = ({ data, location }: PageProps<GraphQLResult>) => {
// 	const siteTitle = data.site.siteMetadata?.title || `Title`;

// 	// destructure contentful fields
// 	const { author, content, subtitle, title } = data.contentfulPost;

// 	return (
// 		<Layout location={location} title={siteTitle}>
// 			<Seo title={title} description={subtitle} />
// 			<article className='blog-post' itemScope itemType='http://schema.org/Article'>
// 				<Title itemProp='headline'>{title}</Title>
// 				<Subtitle>{subtitle}</Subtitle>
// 				<footer>
// 					<Bio authorName={author} />
// 				</footer>
// 			</article>
// 		</Layout>
// 	);
// };

// export default BlogPostContentfulTemplate;

// export const pageQuery = graphql`
// 	query ContentfulBlogPostBySlug($slug: String!) {
// 		site {
// 			siteMetadata {
// 				title
// 			}
// 		}
// 		contentfulPost(slug: { eq: $slug }) {
// 			title
// 			subtitle
// 			author
// 			content {
// 				raw
// 			}
// 		}
// 	}
// `;
