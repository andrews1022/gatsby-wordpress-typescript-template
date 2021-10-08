import React from 'react';
// import { FooterStles } from '../styled-components/Styles';

const Footer = () => (
	<footer>
		© {new Date().getFullYear()}, Built with
		{` `}
		<a href='https://www.gatsbyjs.com'>Gatsby</a>
	</footer>
);

export default Footer;
