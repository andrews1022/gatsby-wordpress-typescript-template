// import { GatsbyNode } from 'gatsby';
// import path from 'path';

// type GraphQLResult = {
// 	allContentfulPost: {
// 		edges: {
// 			node: {
// 				slug: string;
// 				title: string;
// 			};
// 		}[];
// 	};
// };

// // create pages dynamically from blog posts from contentful
// export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
// 	const { createPage } = actions;

// 	// Define a template for blog post
// 	const blogPost = path.resolve(`./src/templates/blog-post-contentful.tsx`);

// 	// Get all markdown blog posts sorted by date
// 	const result = await graphql<GraphQLResult>(
// 		`
// 			{
// 				allContentfulPost {
// 					edges {
// 						node {
// 							slug
// 							title
// 						}
// 					}
// 				}
// 			}
// 		`
// 	);

// 	if (result.errors) {
// 		reporter.panicOnBuild(`There was an error loading your blog posts`, result.errors);
// 		return;
// 	}

// 	if (!result.data) {
// 		throw new Error('Failed to get posts.');
// 	}

// 	// Create blog posts pages
// 	const posts = result.data.allContentfulPost.edges;

// 	if (posts.length > 0) {
// 		posts.forEach((post) => {
// 			createPage({
// 				path: post.node.slug,
// 				component: blogPost,
// 				context: {
// 					slug: post.node.slug,
// 					title: post.node.title
// 				}
// 			});
// 		});
// 	}
// };
