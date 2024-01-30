import Carousel from '../util/carousel';
import TitlePage from './headerTitlePage';

const Header = () => {
	return (
		<header className='relative h-[65vh]  text-white xl:h-[100vh] overflow-hidden'>
			<Carousel />
		</header>
	);
};

export default Header;
