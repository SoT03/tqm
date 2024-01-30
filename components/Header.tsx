import { useWindowSize } from '@/hooks/useWindowSize';
import Link from 'next/link';
import { title } from 'process';

const Header = () => {
	const sizes = useWindowSize();

	let titleStyle =
		'font-semibold text-2xl text-sky-300 md:text-4xl lg:text-5xl';

	return (
		<header
			className='relative h-[65vh] bg-center bg-cover  text-white xl:h-[100vh] z-0 '
			style={{
				backgroundImage: `${
					sizes.width >= 768
						? 'url(/img/handshake_big.jpg)'
						: 'url(/img/handshake_small.jpg)'
				}`,
			}}>
			<div className='wrapper-lg flex flex-col h-full items-center justify-center px-10 md:px-24 md:items-start lg:ml-10 lg:max-w-[60%] z-10'>
				<h2 className='mt-16 md:text-2xl text-shadow md:mt-0 md:mb-4 lg:my-10 xl:text-3xl xl:w-3/4'>
					<span className={titleStyle}>Jakość</span> to nasza misja,{' '}
					<span className={titleStyle}>doskonałość</span> to nasza droga.
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
		</header>
	);
};

export default Header;
