import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
// import { Title } from "../styled-components/Styles";

interface HeaderProps {
	isRootPath: boolean;
	title: string;
}

// dynamic background colour
const HeaderStyles = styled.header<{ isRootPath: boolean }>`
	background-color: ${(props) => (props.isRootPath ? '#e6ccad' : '#add8e6')};
`;

const Header = ({ isRootPath, title }: HeaderProps) => (
	<HeaderStyles className='global-header' isRootPath={isRootPath}>
		{isRootPath ? (
			<h1 className='main-heading'>
				<Link to='/'>{title}</Link>
			</h1>
		) : (
			<Link className='header-link-home' to='/'>
				{title}
			</Link>
		)}
	</HeaderStyles>
);

export default Header;
