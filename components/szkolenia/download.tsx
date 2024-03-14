import React from 'react';
import Section from '../util/section/Section';
import SectionTitle from '../util/section/SectionTitle';
import { IconDownload } from '@tabler/icons-react';

import Link from 'next/link';

export default function Download() {
	return (
		<Section id='more'>
			<div className='wrapper'>
				<h2 className='text-center font-semibold text-2xl text-blue-700 md:text-3xl'>
					Pliki dotyczące szkoleń
				</h2>

				<div className='my-10 md:my-16'>
					<Link
						href='/files/Formularz-zgloszeniowy-TQM2024.pdf'
						target='_blank'
						download={true}
						className='flex gap-2 text-xl my-6 underline md:text-2xl md:mb-10 xl:text-xl xl:mb-4 hover:text-blue-600 duration-300'>
						Formularz zgłoszeniowy <IconDownload stroke={2} />
					</Link>
					<Link
						href='/files/Regulamin-szkolen.pdf'
						target='_blank'
						className='flex gap-2 text-xl  underline md:text-2xl xl:text-xl hover:text-blue-600 duration-300'>
						Regulamin Szkoleń <IconDownload stroke={2} />
					</Link>
				</div>
			</div>
		</Section>
	);
}
