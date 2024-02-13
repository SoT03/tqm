import { useWindowSize } from '@/hooks/useWindowSize';
import TitlePage from '../Header/headerTitlePage';
import CarouselItem from './carouselItem';
import { useCallback, useEffect, useRef, useState } from 'react';

const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const timerRef = useRef<NodeJS.Timeout>();
	const sizes = useWindowSize();

	const carouselItems = [
		{
			url: 'url(/img/course_big.jpg)',
			url_mobile: 'url(/img/course_small.jpg)',
			heading: 'Szkolenia',
			para: 'Uczestnicy szkoleń zdobywają umiejętności niezbędne do pełnienia obowiązków certyfikowanego pełnomocnika ds. poszczególnych systemów zarządzania oraz audytora wewnętrznego, zgodnych z normami ISO.',
			link: '/szkolenia',
			button_text: 'Sprawdź Szkolenia',
		},
		{
			url: 'url(/img/certificate_big.jpg)',
			url_mobile: 'url(/img/certificate_small.jpg)',
			heading: 'Wdrożenia',
			para: 'Chcesz wdrożyć system ISO w swojej firmie i szukasz profesjonalnego wsparcia ? Pomożemy ci wdrożyć ISO: 9001,14001,27001 i wiele innych.',
			link: '/wdrozenia',
			button_text: 'Sprawdź Wdrożenia',
		},
		{
			url: 'url(/img/audit_big.jpg)',
			url_mobile: 'url(/img/audit_small.jpg)',
			heading: 'Audyty',
			para: 'Przeprowadzimy audyt dzięki któremu poznasz słabe oraz mocne strony swojej firmy.',
			link: '/audyty',
			button_text: 'Sprawdź Audyty',
		},
	];

	const dots = [0, 1, 2, 3];

	const nextItem = useCallback(() => {
		const isLastSlide = currentIndex === carouselItems.length;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	}, [currentIndex, carouselItems]);

	useEffect(() => {
		if (timerRef.current) {
			clearTimeout(timerRef.current);
		}
		timerRef.current = setTimeout(() => {
			nextItem();
		}, 6000);
		return () => clearTimeout(timerRef.current);
	}, [nextItem]);

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
			<div className='absolute flex left-1/2 -translate-x-1/2  bottom-6 md:bottom-16 md:translate-x-0'>
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
