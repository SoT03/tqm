import { useState } from 'react';
import Section from './util/section/Section';
import SectionTitle from './util/section/SectionTitle';
import SectionHr from './util/section/Sectionhr';
import Link from 'next/link';
import Card from './OfferCard';

const offerList = [
	{
		id: 'Szkolenia',
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
		data: [
			{
				title: 'ISO 9001',
				text: 'System Zarządzania Jakością 9001:2015',
				link: '/wdrozenia/iso9001/wdrozenie',
			},
			{
				title: 'ISO 27001',
				text: 'System Zarządzania Bezpieczeństwem Informacji 27001:2022',
				link: '/wdrozenia/iso27001/wdrozenie',
				newForm: true,
			},
			{
				title: 'ISO 45001',
				text: 'System Zarządzania Bezpieczeństwem i Higieną Pracy 45001:2018',
				link: '/wdrozenia/iso9001/wdrozenie',
			},
		],
	},
];

const Offer = () => {
	const [activeOffer, setActiveOffer] = useState(0);

	return (
		<Section id='offer' classes='bg-slate-100'>
			<SectionTitle title='Nasza Oferta' />
			<SectionHr classes='ml-[50%] -translate-x-1/2' />
			<p className='mt-6 mb-6'>
				Specjalizujemy się w dziedzinie organizacji i zarządzania,
				projektowania, wdrażania i rozwijania systemów zarządzania opartych o
				międzynarodowe Normy ISO.
			</p>
			<div>
				<menu className='flex justify-between mb-12 md:mb-20'>
					{offerList.map((item, index) => (
						<button
							onClick={() => setActiveOffer(index)}
							key={item.id}
							className={`w-[45%] border-2 h-2/4 p-2 ${
								activeOffer === index ? 'border-blue-400' : ''
							} `}>
							{item.id}
						</button>
					))}
				</menu>
				<div className='flex gap-12 justify-center flex-wrap'>
					{offerList[activeOffer].data.map((item) => (
						<Card key={item.title} data={item} />
					))}
				</div>
			</div>
		</Section>
	);
};

export default Offer;
