import * as React from 'react';
import { WindowLocation } from '@reach/router';

import Header from './Header';
import Footer from './Footer';

import GlobalStyle from '../styled-components/GlobalStyle';

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
			<GlobalStyle />
			<Header isRootPath={isRootPath} title={title} />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
