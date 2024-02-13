import Link from 'next/link';
import Image from 'next/image';
import {
	IconPhoneFilled,
	IconMailFilled,
	IconMapPinFilled,
	IconBrandFacebookFilled,
} from '@tabler/icons-react';

const contactData = [
	{
		icon: <IconPhoneFilled />,
		text: '+48 518 053 702',
	},
	{
		icon: <IconMailFilled />,
		text: 'biuro@tqmpartners.pl',
	},
	{
		icon: <IconMapPinFilled />,
		text: 'ul. Tuwima 16/33 05-084 Leszno',
	},
];
const orgData = [
	{
		text: 'KRS:',
		number: '0001071346',
	},
	{
		text: 'NIP:',
		number: '1182273789',
	},
	{
		text: 'REGON:',
		number: '527027590',
	},
];

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className='relative w-full bottom-0 bg-black text-white py-8 lg:px-10'>
			<div className='wrapper flex flex-col  items-center gap-8 lg:flex-row lg:justify-center lg:gap-16'>
				<div className='flex flex-col items-center gap-4 uppercase font-semibold cursor-default '>
					<div className='flex'>
						<p className='text-xl  lg:text-3xl'>tqm</p>
						<Image
							height={60}
							width={80}
							src='/img/logo.png'
							alt='TQM Partners'
							className='w-8 mx-1 md:w-12'
						/>{' '}
						<p className='text-xl mr-2 lg:text-3xl '>Partners</p>{' '}
						<p className='text-xl lg:text-3xl'> {year} &copy;</p>
					</div>

					<Link
						className='flex '
						target='_blank'
						href='https://www.facebook.com/profile.php?id=61555154324634'>
						<IconBrandFacebookFilled className='h-6 w-6 border-blue-500 border-2 p-0.5 rounded-sm text-blue-500' />
						<span className='lowercase ml-2'>www.facebook.com</span>
					</Link>
				</div>
				<div className='flex flex-col gap-1'>
					<h3 className='font-bold text-lg mb-2'>Oferta</h3>
					<Link href='/wdrozenia' className='hover:text-blue-400'>
						Wdrożenia
					</Link>
					<Link href='/szkolenia ' className='hover:text-blue-400'>
						Szkolenia
					</Link>
					<Link href='/audyty ' className='hover:text-blue-400'>
						Audyty
					</Link>
				</div>
				<div>
					{contactData.map((item) => (
						<div
							key={item.text}
							className='flex gap-2 my-2 md:gap-3 md:items-center'>
							{item.icon} <p>{item.text}</p>
						</div>
					))}
				</div>
				<div>
					<div>
						{orgData.map((item) => (
							<p key={item.number}>
								{item.text} {item.number}
							</p>
						))}
					</div>
					<Link
						target='_blank'
						href='/politykaprywatnosci'
						className='hover:text-blue-400'>
						Polityka Prywatności
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
