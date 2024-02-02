import Image from 'next/image';
import Link from 'next/link';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

const navLinks: { name: string; link: string }[] = [
	{ name: 'O nas', link: '/#aboutus' },
	{ name: 'Wdrożenia', link: '/wdrożenia' },
	{ name: 'Audyty', link: '/audyty' },
	{ name: 'Szkolenia', link: '/szkolenia' },
	{ name: 'Kontakt', link: '/kontakt' },
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
		<nav className='fixed top-0 left-0 w-full  text-lg bg-sky-300 backdrop-blur-sm bg-opacity-35  md:bg-transparent    z-10'>
			<div className='wrapper-lg'>
				<div className='py-4 px-6 flex items-center justify-between md:py-2 lg:px-10 lg:py-4'>
					<Link
						href={'/'}
						className='flex items-center uppercase font-semibold  '>
						<p className='  lg:text-2xl'>tqm</p>
						<Image
							height={60}
							width={80}
							src='/img/logo.png'
							alt='TQM Partners'
							className='w-8 mx-1 md:w-12'
						/>{' '}
						<p className=' lg:text-2xl '>Partners</p>
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
						className={`absolute bg-transparent text-black  w-full right-0 top-[72px] text-center     ${
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
									} md:opacity-100 md:border-none md:translate-x-0 md:mx-2 lg:mx-5`}>
									<Link
										href={link.link}
										className={`relative block py-5 px-1 bg-sky-500  z-100  text-xl md:bg-transparent md:py-1 md:my-2  md:text-lg hover:text-blue-400 transition-colors duration-300 before:bottom-0 before:bg-blue-400 before:w-0 before:h-px before:transition-[width] before:duration-500  before:absolute before:-z-10  before:content-[""] hover:before:w-full`}>
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
