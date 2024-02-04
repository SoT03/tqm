import { useWindowSize } from '@/hooks/useWindowSize';
import Section from './util/section/Section';
import Link from 'next/link';

type HeroProps = {
	text: string;
};

const Hero = ({ text }: HeroProps) => {
	const size = useWindowSize();
	return (
		<Section
			classes='relative z-0 bg-cover bg-center  md:bg-fixed '
			id='hero'
			style={{
				backgroundImage: `url(/img/customerService_${
					size.width >= 768 ? 'big' : 'small'
				}.jpg)`,
			}}>
			<div className='flex flex-col gap-6 md:px-32 md:gap-8 md:py-2 lg:px-60'>
				<h2 className='text-white text-center text-lg lg:text-3xl'>{text}</h2>
				<Link
					href='/#contact'
					className=' btn--nocolor mx-auto bg-red-700 font-semibold text-white text-center   hover:scale-110'>
					Skontaktuj się z nami
				</Link>
			</div>
			<div className='bg-shadow'></div>
		</Section>
	);
};

export default Hero;
