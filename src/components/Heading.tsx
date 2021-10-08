import React from 'react';
// import styled from 'styled-components';
// import { JsxElement } from "typescript";
// import { JsxChild } from "typescript";

interface HeadingProps {
	// styles
	// color: string;
	// size: string;
	// weight: string;

	// html tag to render
	// element: string;

	// other
	children: React.ReactNode;
}

// const HeadingStyles = styled.div<{ color: string; size: string; weight: string }>`
// 	color: ${(props) => (props.color ? props.color : '#000')};
// 	font-size: ${(props) => (props.size ? props.size : '16px')};
// 	font-weight: ${(props) => (props.weight ? props.weight : '400')};
// `;

const Heading = ({ children }: HeadingProps) => (
	<>
		<h1>{children}</h1>
	</>
);

export default Heading;
