import React from 'react';

const Footer = () => (
	<footer>
		© {new Date().getFullYear()}, Built with
		{` `}
		<a href='https://www.gatsbyjs.com'>Gatsby</a> and TypeScript
	</footer>
);

export default Footer;
