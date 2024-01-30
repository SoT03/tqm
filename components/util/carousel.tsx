import { useWindowSize } from '@/hooks/useWindowSize';
import TitlePage from '../Header/headerTitlePage';
import CarouselItem from './carouselItem';

const Carousel = () => {
	const sizes = useWindowSize();

	return (
		<div className='relative h-full z-0 overflow-hidden'>
			<div className='w-full h-full'>
				<TitlePage width={sizes.width} />
				<CarouselItem width={sizes.width} />
			</div>
		</div>
	);
};

export default Carousel;
