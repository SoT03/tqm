import Link from 'next/link';

import HighlightedSpan from './headerHighlighted';

type titlePageProps = {
	width: number;
	isActive: boolean;
};

const TitlePage = ({ width, isActive }: titlePageProps) => {
	return (
		<div
			className={`absolute w-full h-full bg-center bg-cover z-0 transition-opacity duration-1000 ${
				isActive ? 'opacity-100 ' : 'opacity-0 -z-10'
			}`}
			style={{
				backgroundImage: `${
					width >= 768
						? 'url(/img/handshake_big.jpg)'
						: 'url(/img/handshake_small.jpg)'
				}`,
			}}>
			<div className='wrapper-lg flex flex-col h-full items-center justify-center px-10 md:px-24 md:items-start lg:bg-black lg:bg-opacity-40 lg:ml-0 lg:max-w-[60%] xl:max-w-[50%] z-10  '>
				<div className='mt-6 mb-2 md:text-2xl text-shadow md:mt-0 md:mb-4 lg:my-10 xl:text-3xl xl:mr-28'>
					<h1 className='flex flex-col text-xl font-semibold text-right md:flex-row md:mb-2'>
						<span className='text-teal-300  text-shadow'>Szkolenia,</span>
						<span className='text-teal-200 text-shadow'>Wdrożenia,</span>
						<span className='text-teal-100 text-shadow'>Doradztwo</span>
						<span className='text-teal-50 text-shadow'>ISO</span>
					</h1>
					<h2>
						Systemy zarządzania to nasza <HighlightedSpan text='PASJA' />
					</h2>
					<h2 className=''>
						<HighlightedSpan text='Jakość' /> to nasza misja,{' '}
						<HighlightedSpan text='Doskonałość' /> to nasza droga.
					</h2>
				</div>
				<div className='w-full '>
					<p className='hidden md:block'>
						Nasi eksperci to zespół wysoko wykwalifikowanych profesjonalistów,
						których głęboka wiedza i doświadczenie przyczyniają się do sukcesu
						naszej i Państwa organizacji. Ich zaangażowanie w rozwój
						innowacyjnych rozwiązań oraz zdolność do rozwiązywania
						skomplikowanych problemów sprawiają, że są nieocenionym źródłem
						know-how dla Państwa.
					</p>
				</div>

				<Link href={'/#aboutus'} className='btn mt-6 lg:mt-16 xl:text-lg'>
					więcej o nas
				</Link>
			</div>
			<div className='bg-shadow'></div>
		</div>
	);
};

export default TitlePage;
