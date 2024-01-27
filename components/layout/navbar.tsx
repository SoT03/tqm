import Image from 'next/image';
import Link from 'next/link';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

const navLinks: { name: string; link: string }[] = [
	{ name: 'O nas', link: '/#aboutUs' },
	{ name: 'Oferta', link: '/offer' },
	{ name: 'Kontakt', link: '/contact' },
	{ name: 'Polityka Prywatności', link: '/privacyPolicy' },
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrollY, setScrollY] = useState(0);
	useEffect(() => {
		function handleScroll() {
			setScrollY(window.scrollY);
		}

		window.addEventListener('scroll', handleScroll);
	}, []);

	const navMenuHandler = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className='fixed top-0 left-0 w-full text-lg bg-blue-300 bg-opacity-35     z-10'>
			<div className='wrapper'>
				<div className='py-4 px-6 flex items-center justify-between'>
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

					<div
						className='cursor-pointer  md:hidden z-30'
						onClick={navMenuHandler}>
						<IconMenu2
							className={`w-10 h-10 ${!isOpen ? 'nav-icon' : 'hidden'}`}
						/>
						<IconX className={`w-10 h-10 ${isOpen ? 'nav-icon' : 'hidden'}`} />
					</div>

					<ul
						className={`absolute bg-transparent text-white  w-full right-0 top-[72px] text-center     ${
							isOpen ? '' : 'invisible'
						}`}>
						{navLinks.map((link, index) => {
							let duration = (index + 2) * 250;
							return (
								<li key={link.name}>
									<Link
										style={{ transitionDuration: duration + 'ms' }}
										href={link.link}
										className={`block py-5 bg-blue-400 cursor-pointerz-100 font-semibold text-xl ${
											index === 0 ? '' : 'border-t-2'
										}  ${
											isOpen
												? 'translate-x-0 opacity-1'
												: 'translate-x-full opacity-0'
										}`}>
										{link.name}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
