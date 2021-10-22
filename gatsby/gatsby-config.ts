import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
	// make sure the .env is being used now
	dotenv.config();
}

export default {
	siteMetadata: {
		title: `Gatsby w/ TypeScript & Styled Components Demo`,
		author: {
			name: `Andrew Shearer`,
			summary: `who lives and works in Vancouver building not so useful things.`
		},
		description: `A starter blog demonstrating using Gatsby, TypeScript, Styled Components, and Contentful as a headless CMS.`,
		siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
		social: {
			twitter: `some_twitter_account_here`
		}
	},
	plugins: [
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/../src/images`
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 630
						}
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`
						}
					},
					`gatsby-remark-prismjs`,
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`
				]
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Gatsby Starter Blog`,
				short_name: `GatsbyJS`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`
			}
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-gatsby-cloud`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-source-wordpress`,
			options: {
				url: `http://gatsby-wordpress-typescript-template.local/graphql`
			}
		},
		{
			resolve: `gatsby-plugin-typescript`,
			options: {
				isTSX: true,
				jsxPragma: `jsx`,
				allExtensions: true
			}
		}
	]
};
