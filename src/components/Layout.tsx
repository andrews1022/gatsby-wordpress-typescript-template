import React from 'react';
import { WindowLocation } from '@reach/router';
import { ThemeProvider } from 'styled-components';

// components
import Footer from './Footer';
import Nav from './Nav';

// styles
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';

interface LayoutProps {
	location: WindowLocation;
	title: string;
	children: React.ReactNode;
}

const Layout = ({ location, title, children }: LayoutProps) => {
	// eslint-disable-next-line no-undef
	const rootPath = `${__PATH_PREFIX__}/`;

	const isRootPath = location.pathname === rootPath;

	return (
		<div className='global-wrapper' data-is-root-path={isRootPath}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Nav />
				<main>{children}</main>
				<Footer />
			</ThemeProvider>
		</div>
	);
};

export default Layout;
