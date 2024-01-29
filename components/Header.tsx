import { useWindowSize } from '@/hooks/useWindowSize';
import Link from 'next/link';

const Header = () => {
	const sizes = useWindowSize();

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
			<div className='wrapper flex flex-col h-full items-center justify-center px-10 z-10'>
				<h2 className='mt-16'>
					<span className='font-semibold text-xl text-sky-300'>Jakość</span> to
					nasza misja,
					<span className='font-semibold text-xl text-sky-300'>
						doskonałość
					</span>{' '}
					to nasza droga.
				</h2>
				<div className='flex flex-col w-full text-right font-semibold'>
					<span className='text-teal-300'>Szkolimy,</span>
					<span className='text-teal-200 '>Wdrażamy,</span>
					<span className='text-teal-100'>Doradzamy</span>
				</div>

				<Link href={'/'} className='btn mt-10'>
					więcej o nas
				</Link>
			</div>
			<div className='bg-shadow'></div>
		</header>
	);
};

export default Header;
