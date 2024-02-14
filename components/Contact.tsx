import ContactRow from './ContactRow';
import Form from './util/contactForm/Form';
import Section from './util/section/Section';
import SectionTitle from './util/section/SectionTitle';
import {
	IconPhoneFilled,
	IconMailFilled,
	IconMapPinFilled,
} from '@tabler/icons-react';

const contactData = [
	{
		icon: <IconPhoneFilled />,
		text: '+48 518 053 702',
		href: 'tel:518053702',
		mobileOnly: true,
	},
	{
		icon: <IconMailFilled />,
		text: 'biuro@tqmpartners.pl',
		href: 'mailto:biuro@tqmpartners.pl',
	},
	{
		icon: <IconMapPinFilled />,
		text: 'ul. Tuwima 16/33 05-084 Leszno',
	},
];

const Contact = () => {
	return (
		<section
			id='contact'
			className='bg-slate-100 text-black px-8 py-12 md:px-12 lg:py-0 lg:px-0 lg:text-white'>
			<div className='flex flex-col gap-8 md:gap-10 lg:flex-row lg:gap-0 lg:justify-center '>
				<div className='lg:bg-blue-950 lg:w-5/12 lg:py-8 lg:flex lg:flex-col lg:items-center lg:justify-center xl:w-1/4'>
					<SectionTitle title='Skontaktuj się z nami' classes='lg:text-white' />
					<div className='mt-6 md:mt-10 lg:mb-6'>
						{contactData.map((item) => (
							<ContactRow data={item} key={item.text} />
						))}
					</div>
				</div>
				<div className='lg:w-7/12 lg:py-8 lg:px-10  xl:w-3/4 '>
					<SectionTitle
						title='Wyślij nam wiadomość'
						classes='hidden md:block '
					/>
					<Form />
					
				</div>
			</div>
		</section>
	);
};

export default Contact;
