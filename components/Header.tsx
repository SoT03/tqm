import { useWindowSize } from '@/hooks/useWindowSize';

const Header = () => {
	const sizes = useWindowSize();

	return (
		<header
			className='relative h-[65vh] bg-center bg-cover  text-white xl:h-[100vh] -z-10'
			style={{
				backgroundImage: `${
					sizes.width >= 768
						? 'url(/img/handshake_big.jpg)'
						: 'url(/img/handshake_small.jpg)'
				}`,
			}}>
			<div className='wrapper'></div>
			<div className='bg-shadow'></div>
		</header>
	);
};

export default Header;
