import Image from 'next/image';
import Link from 'next/link';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import Logo from './logo';

const navLinks: { name: string; link: string }[] = [
	{ name: 'O nas', link: '/#aboutus' },
	{ name: 'Wdrożenia', link: '/wdrozenia' },
	{ name: 'Audyty', link: '/audyty' },
	{ name: 'Szkolenia', link: '/szkolenia' },
	{ name: 'Kontakt', link: '/#contact' },
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navLinkHandler = () => {
		setIsOpen(false);
	};

	const navMenuHandler = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className='fixed top-0 left-0 w-full  text-lg  backdrop-blur-sm bg-opacity-65  bg-black    z-10'>
			<div className='wrapper-lg'>
				<div className='py-4 px-6 flex items-center justify-between md:py-2 lg:px-10 lg:py-4'>
					<Logo />
					<div
						className='cursor-pointer text-white md:hidden z-30'
						onClick={navMenuHandler}>
						<IconMenu2
							className={`w-10 h-10  ${!isOpen ? 'nav-icon' : 'hidden'}`}
						/>
						<IconX className={`w-10 h-10 ${isOpen ? 'nav-icon' : 'hidden'}`} />L
					</div>

					<ul
						className={`absolute bg-transparent text-white  w-full right-0 top-[72px] text-center     ${
							isOpen ? '' : 'invisible'
						} md:visible md:static md:flex md:items-center md:justify-between md:w-auto `}>
						{navLinks.map((link, index) => {
							let duration = (index + 2) * 250;
							return (
								<li
									
									onClick={navLinkHandler}
									style={{ transitionDuration: duration + 'ms' }}
									key={link.name}
									className={` ${index === 0 ? '' : 'border-t-2'}  ${
										isOpen
											? 'opacity-100 translate-x-0'
											: ' translate-x-full opacity-0'
									} md:opacity-100 md:border-none md:translate-x-0 md:mx-2 lg:mx-5`}>
									<Link
										href={link.link}
										className={`relative block py-5 px-1 bg-sky-500  z-100  text-xl md:bg-transparent md:py-1 md:my-2  md:text-lg hover:text-blue-400 transition-colors duration-300 before:bottom-0 before:bg-blue-500 before:w-0 before:h-px before:transition-[width] before:duration-500  before:absolute before:-z-10  before:content-[""] hover:before:w-full`}>
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
