import { useWindowSize } from '@/hooks/useWindowSize';
import TitlePage from '../Header/headerTitlePage';
import CarouselItem from './carouselItem';
import { useState } from 'react';

const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const sizes = useWindowSize();

	const carouselItems = [
		{
			url: 'url(/img/course_big.jpg)',
			url_mobile: 'url(/img/course_small.jpg)',
			heading: 'Szkolenia',
			para: 'Oferujemy usługi szkoleń na Pełnomocnika oraz Audytora ISO. A także wdrażamy systemy zarządzania.',
			link: '/',
			button_text: 'Sprawdź Ofertę',
		},
		{
			url: 'url(/img/certificate_big.jpg)',
			url_mobile: 'url(/img/certificate_small.jpg)',
			heading: 'Certyfikacja Systemów',
			para: 'Certyfikacja systemów zarządzania: ISO 27001 , ISO 9001, ISo 14001 i wielu więcej.',
			link: '/',
			button_text: 'Sprawdź Ofertę',
		},
	];

	return (
		<div className='relative h-full z-0 overflow-hidden'>
			<div className='w-full h-full'>
				<TitlePage width={sizes.width} />
				{carouselItems.map((item) => (
					<CarouselItem key={item.heading} data={item} width={sizes.width} />
				))}
			</div>
		</div>
	);
};

export default Carousel;
