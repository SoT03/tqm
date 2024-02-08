import { useWindowSize } from '@/hooks/useWindowSize';

const Header = () => {
	const size = useWindowSize();

	return (
		<header
			style={{
				backgroundImage: `url('/img/wdrozenia/businessman_${
					size.width >= 768 ? 'big' : 'small'
				}.jpg')`,
			}}
			className='mt-16 relative bg-center bg-cover text-white  z-0'>
			<div className='wrapper flex flex-col items-center gap-2 p-8 md:px-20 md:gap-6 lg:px-44 lg:py-12 lg:mt-20 xl:py-20 xl:px-60'>
				<h1 className='text-2xl font-bold text-shadow md:text-4xl'>
					Wdrożenia
				</h1>
				<p className='text-shadow lg:text-xl'>
					Nasze projekty wdrożeniowe realizowane są z wykorzystaniem metodyki
					Kaizen, zgodnie z którą angażujemy wszystkich pracowników organizacji,
					niezależnie od szczebla, w stałe poszukiwanie pomysłów udoskonalenia
					wszystkich obszarów organizacji.{' '}
				</p>
			</div>
			<div className='bg-shadow '></div>
		</header>
	);
};

export default Header;
