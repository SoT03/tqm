import Image from 'next/image';
import Link from 'next/link';

const navLinks: { name: string; link: string }[] = [
	{ name: 'O nas', link: '/#aboutUs' },
	{ name: 'Oferta', link: '/offer' },
	{ name: 'Kontakt', link: '/contact' },
];

const Navbar = () => {
	return (
		<nav className='fixed top-0 left-0 w-full text-lg bg-sky-400   lg:text-xl z-10'>
			<div className='wrapper'>
				<div className='py-2 px-4'>
					<Link
						href={'/'}
						className='flex items-center uppercase font-semibold'>
						<p className='  lg:text-2xl'>tqm</p>
						<Image
							height={60}
							width={80}
							src='/img/logo.png'
							alt='TQM Partners'
							className='w-8 mx-1'
						/>{' '}
						<p className=' lg:text-2xl'>Partners</p>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
