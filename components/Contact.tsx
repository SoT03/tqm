import ContactRow from './ContactRow';
import Form from './util/contactForm/Form';
import Section from './util/section/Section';
import SectionTitle from './util/section/SectionTitle';
import {
	IconPhoneFilled,
	IconMailFilled,
	IconMapPinFilled,
} from '@tabler/icons-react';

const iconClass = '';

const contactData = [
	{
		icon: <IconPhoneFilled className={iconClass} />,
		text: '+48 518 053 702',
		href: 'tel:518053702',
		mobileOnly: true,
	},
	{
		icon: <IconMailFilled className={iconClass} />,
		text: 'biuro@tqmpartners.pl',
		href: 'mailto:biuro@tqmpartners.pl',
	},
	{
		icon: <IconMapPinFilled className={iconClass} />,
		text: 'ul. Tuwima 16/33 05-084 Leszno',
	},
];

const Contact = () => {
	return (
		<section
			id='contact'
			className='bg-slate-100 text-black px-8 py-12 md:px-12 lg:py-0 lg:px-0 lg:text-white'>
			<div className='flex flex-col gap-8 md:gap-10 lg:flex-row lg:gap-0 lg:justify-center '>
				<div className='lg:bg-blue-950 lg:w-1/2 lg:py-8 lg:flex lg:flex-col lg:items-center '>
					<SectionTitle title='Skontaktuj się z nami' classes='lg:text-white' />
					<div className='mt-6 md:mt-10 lg:mb-6'>
						{contactData.map((item) => (
							<ContactRow data={item} key={item.text} />
						))}
					</div>
					<iframe
						className='hidden  w-full h-3/5  max-w-[35vw] lg:block xl:max-w-[30vw]'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.0559185000548!2d20.5808099!3d52.2605296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47194d00605ef69b%3A0x87049b859ecfd44f!2sTQM%20Partners%20Sp.%20z%20o.%20o.!5e0!3m2!1spl!2spl!4v1707161625180!5m2!1spl!2spl'
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'></iframe>
				</div>
				<div className='lg:w-1/2 lg:py-8 lg:px-10 xl:pr-96 xl:pl-24'>
					<SectionTitle
						title='Wyślij nam wiadomość'
						classes='hidden md:block lg:pb-2'
					/>
					<Form />
				</div>
			</div>
		</section>
	);
};

export default Contact;
