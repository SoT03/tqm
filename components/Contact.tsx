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
		<Section id='contact' classes='bg-slate-100'>
			<div className='flex flex-col gap-8'>
				<div className=''>
					<SectionTitle title='Skontaktuj się z nami' />
					<div className='mt-6'>
						{contactData.map((item) => (
							<ContactRow data={item} key={item.text} />
						))}
					</div>
				</div>
				<div>
					<SectionTitle title='Wyślij nam wiadomość' classes='hidden' />
					<Form />
				</div>
			</div>
		</Section>
	);
};

export default Contact;
