import { useWindowSize } from '@/hooks/useWindowSize';
import Section from './util/section/Section';

type HeroProps = {
	text: string;
};

const Hero = ({ text }: HeroProps) => {
	const size = useWindowSize();
	return (
		<Section
			id='hero'
			style={{
				backgroundImage: `url(/img/customerService_${
					size.width > 768 ? 'big' : 'small'
				}.jpg)`,
			}}>
			<h2>{text}</h2>
		</Section>
	);
};

export default Hero;
