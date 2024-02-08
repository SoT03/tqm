import { useState } from 'react';
import Section from './util/section/Section';
import SectionTitle from './util/section/SectionTitle';
import SectionHr from './util/section/Sectionhr';
import Link from 'next/link';
import Card from './OfferCard';

const offerList = [
	{
		id: 'Szkolenia',
		btn: 'Szkoleń',
		link: '/szkolenia',
		data: [
			{
				title: 'ISO 14001',
				text: 'Pełnomocnik ds. Systemu Zarządzania Środowiskowego',
				link: '/szkolenia/iso9001/pelnomocnik',
			},
			{
				title: 'ISO 27001',
				text: 'Szkolenie wymagania normy ISO 27001:2022',
				link: '/szkolenia/iso27001/wymagania',
				newForm: true,
			},
			{
				title: 'ISO 9001',
				text: 'Audytor wewnętrzny ISO 9001:2015',
				link: '/szkolenia/iso9001/audytor',
			},
		],
	},
	{
		id: 'Wdrożenia',
		btn: 'Wdrożeń',
		link: '/wdrozenia',
		data: [
			{
				title: 'ISO 9001',
				text: 'System Zarządzania Jakością 9001:2015',
				link: '/wdrozenia/iso9001/',
			},
			{
				title: 'ISO 27001',
				text: 'System Zarządzania Bezpieczeństwem Informacji 27001:2022',
				link: '/wdrozenia/iso27001/',
				newForm: true,
			},
			{
				title: 'ISO 45001',
				text: 'System Zarządzania Bezpieczeństwem i Higieną Pracy 45001:2018',
				link: '/wdrozenia/iso9001/',
			},
		],
	},
];

const Offer = () => {
	const [activeOffer, setActiveOffer] = useState(0);

	return (
		<Section id='offer' classes='bg-slate-100'>
			<SectionTitle title='Nasza Oferta' />
			<SectionHr classes='md:ml-[50%] md:-translate-x-1/2' />
			<p className='my-6 md:mb-12 md:text-center md:px-10 lg:px-44 xl:px-64'>
				Specjalizujemy się w dziedzinie organizacji i zarządzania,
				projektowania, wdrażania i rozwijania systemów zarządzania opartych o
				międzynarodowe Normy ISO.
			</p>
			<div>
				<menu className='flex gap-2 justify-center mb-12 md:gap-12 md:mb-20'>
					{offerList.map((item, index) => (
						<button
							onClick={() => setActiveOffer(index)}
							key={item.id}
							className={` border-2 py-2  px-5 md:py-3 md:text-lg md:max-w-[200px] hover:scale-105 transition-transform duration-300 ${
								activeOffer === index ? 'border-blue-500 ' : ''
							} `}>
							{item.id}
						</button>
					))}
				</menu>
				<div className='flex gap-12 justify-center flex-wrap mb-12 lg:gap-16 lg:mb-16'>
					{offerList[activeOffer].data.map((item) => (
						<Card key={item.title} data={item} />
					))}
				</div>
			</div>
			<div className='flex justify-center'>
				<Link
					className=' btn--nocolor bg-red-700 font-semibold text-white text-center md:py-3 md:px-7 md:text-xl  hover:scale-110 '
					href={offerList[activeOffer].link}>
					Pełna Oferta {offerList[activeOffer].btn}{' '}
				</Link>
			</div>
		</Section>
	);
};

export default Offer;
