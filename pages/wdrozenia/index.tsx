import Hero from '@/components/Hero';
import Header from '@/components/wdrozenia/Header';
import MainSection from '@/components/wdrozenia/main';

const Home = () => {
	return (
		<>
			<Header
				data={{
					img: '/img/wdrozenia/businessman_big.jpg',
					img_mobile: '/img/wdrozenia/businessman_small.jpg',
					title: 'Wdrożenia',
					content:
						'Nasze projekty wdrożeniowe realizowane są z wykorzystaniem metodyki  Kaizen, zgodnie z którą angażujemy wszystkich pracowników organizacji, niezależnie od szczebla, w stałe poszukiwanie pomysłów udoskonalenia wszystkich obszarów organizacji.',
				}}
			/>
			<main>
				<MainSection />
				<Hero text='Nie znalazłeś wdrożenia którego szukasz lub potrzebujesz pomocy przy wyborze ?' />
			</main>
		</>
	);
};
export default Home;
