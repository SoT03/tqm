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
			para: 'Certyfikacja systemów zarządzania: ISO 27001 , ISO 9001, ISO 14001 i wielu innych.',
			link: '/',
			button_text: 'Sprawdź Ofertę',
		},
	];

	const dots = [0, 1, 2];

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
			<div className='absolute flex left-1/2 -translate-x-1/2  bottom-7 md:bottom-16 md:translate-x-0'>
				{dots.map((dot) => (
					<div
						onClick={() => setCurrentIndex(dot)}
						key={dot}
						className={`border-2 rounded-full p-2.5 mx-4 transition-all duration-500 cursor-pointer hover:scale-110 ${
							dot === currentIndex ? 'bg-sky-400' : ''
						}`}></div>
				))}
			</div>
		</div>
	);
};

export default Carousel;
