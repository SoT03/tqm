import { useWindowSize } from '@/hooks/useWindowSize';
import TitlePage from '../Header/headerTitlePage';
import CarouselItem from './carouselItem';
import { useEffect, useRef, useState } from 'react';

const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const timerRef = useRef();
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
			para: 'Certyfikacja systemów zarządzania: ISO 27001 , ISO 9001, ISO 14001 i wielu więcej.',
			link: '/',
			button_text: 'Sprawdź Ofertę',
		},
	];

	const nextItem = () => {
		const isLastSlide = currentIndex === carouselItems.length;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	useEffect(() => {
		timerRef.current = setTimeout(() => {
			nextItem();
		}, 6000);
		return () => clearTimeout(timerRef.current);
	});

	return (
		<div className='relative h-full z-0 overflow-hidden'>
			<div className='w-full h-full'>
				<TitlePage width={sizes.width} isActive={currentIndex === 0} />
				{carouselItems.map((item, index) => (
					<CarouselItem
						isActive={index + 1 === currentIndex}
						key={item.heading}
						data={item}
						width={sizes.width}
					/>
				))}
			</div>
		</div>
	);
};

export default Carousel;
