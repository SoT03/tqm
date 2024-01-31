import { useWindowSize } from '@/hooks/useWindowSize';
import TitlePage from '../Header/headerTitlePage';
import CarouselItem from './carouselItem';

const Carousel = () => {
	const sizes = useWindowSize();

	const data = [
		{
			url: 'url(/img/course_big.jpg)',
			url_mobile: 'url(/img/course_small.jpg)',
			heading: 'Szkolenia',
			para: 'Oferujemy usługi szkoleń na Pełnomocnika oraz Audytora ISO. A także wdrażamy systemy zarządzania.',
			link: '/',
			button_text: 'Sprawdź Ofertę',
		},
	];

	return (
		<div className='relative h-full z-0 overflow-hidden'>
			<div className='w-full h-full'>
				<TitlePage width={sizes.width} />
				<CarouselItem width={sizes.width} data={data[0]} />
			</div>
		</div>
	);
};

export default Carousel;
