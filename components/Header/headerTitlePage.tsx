import Link from 'next/link';
import { useState } from 'react';
import HighlightedSpan from './headerHighlighted';

type titlePageProps = {
	width: number;
};

const TitlePage = ({ width }: titlePageProps) => {
	let img = [
		{
			small: 'url(/img/handshake_small.jpg)',
			big: 'url(/img/handshake_big.jpg)',
		},
		{
			small: 'url(/img/course_small.jpg)',
			big: 'url(/img/course_big.jpg)',
		},
		{
			small: 'url(/img/plan_small.jpg)',
			big: 'url(/img/plan_big.jpg)',
		},
	];

	return (
		<div
			className='absolute w-full h-full bg-center bg-cover z-0 duration-500'
			style={{
				backgroundImage: `${
					width >= 768
						? 'url(/img/handshake_big.jpg)'
						: 'url(/img/handshake_small.jpg)'
				}`,
			}}>
			<div className='wrapper-lg flex flex-col h-full items-center justify-center px-10 md:px-24 md:items-start lg:ml-10 lg:max-w-[60%] xl:max-w-[50%] z-10'>
				<h2 className='mt-16 mb-2 md:text-2xl text-shadow md:mt-0 md:mb-4 lg:my-10 xl:text-3xl '>
					<HighlightedSpan text='Jakość' /> to nasza misja,{' '}
					<HighlightedSpan text='Doskonałość' /> to nasza droga.
				</h2>
				<div className='w-full '>
					<div className='flex flex-col text-xl font-semibold text-right md:flex-row md:mb-2'>
						<span className='text-teal-300  text-shadow'>Szkolimy,</span>
						<span className='text-teal-200 text-shadow'>Wdrażamy,</span>
						<span className='text-teal-100 text-shadow'>Doradzamy</span>
					</div>
					<p className='hidden md:block'>
						Nasi eksperci to zespół wysoko wykwalifikowanych profesjonalistów,
						których głęboka wiedza i doświadczenie przyczyniają się do sukcesu
						naszej i Państwa organizacji. Ich zaangażowanie w rozwój
						innowacyjnych rozwiązań oraz zdolność do rozwiązywania
						skomplikowanych problemów sprawiają, że są nieocenionym źródłem
						know-how dla Państwa.
					</p>
				</div>

				<Link href={'/'} className='btn mt-10 lg:mt-16 xl:text-lg'>
					więcej o nas
				</Link>
			</div>
			<div className='bg-shadow'></div>
		</div>
	);
};

export default TitlePage;
