// Bio component that queries for data with Gatsby's useStaticQuery component

import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

interface BioProps {
	authorName: string;
}

const Bio = ({ authorName }: BioProps) => (
	<div className='bio'>
		<StaticImage
			className='bio-avatar'
			layout='fixed'
			src='../images/profile-pic.png'
			width={50}
			height={50}
			quality={95}
			alt='Profile picture'
		/>
		<p>
			Written by <strong>{authorName}</strong>
		</p>
	</div>
);

export default Bio;
