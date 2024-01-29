import Image from 'next/image';
import Link from 'next/link';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

const navLinks: { name: string; link: string }[] = [
	{ name: 'O nas', link: '/#aboutUs' },
	{ name: 'Szkolenia', link: '/training' },
	{ name: 'Wdrożenia', link: '/implementations' },
	{ name: 'Kontakt', link: '/contact' },
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
		<nav className='fixed top-0 left-0 w-full text-lg bg-blue-300 bg-opacity-35  md:bg-transparent   z-10'>
			<div className='wrapper'>
				<div className='py-4 px-6 flex items-center justify-between lg:px-10'>
					<Link
						href={'/'}
						className='flex items-center uppercase font-semibold'>
						<p className='  lg:text-2xl'>tqm</p>
						<Image
							height={60}
							width={80}
							src='/img/logo.png'
							alt='TQM Partners'
							className='w-8 mx-1 md:w-12'
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
						} md:visible md:static md:flex md:items-center md:justify-between md:w-auto `}>
						{navLinks.map((link, index) => {
							let duration = (index + 2) * 250;
							return (
								<li
									style={{ transitionDuration: duration + 'ms' }}
									key={link.name}
									className={` ${index === 0 ? '' : 'border-t-2'}  ${
										isOpen
											? 'opacity-100 translate-x-0'
											: ' translate-x-full opacity-0'
									} md:opacity-100 md:border-none md:translate-x-0 md:mx-3 lg:mx-5`}>
									<Link
										href={link.link}
										className={`block py-5 bg-blue-400 cursor-pointer z-100  text-xl md:bg-transparent  md:text-lg hover:text-red-700 transition-colors duration-300`}>
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
