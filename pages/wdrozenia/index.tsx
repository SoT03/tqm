import Hero from '@/components/Hero';
import Header from '@/components/wdrozenia/Header';
import MainSection from '@/components/wdrozenia/main';

const Home = () => {
	return (
		<>
			<Header />
			<main>
				<MainSection />
				<Hero text='Nie znalazłeś wdrożenia którego szukasz lub potrzebujesz pomocy przy wyborze ?' />
			</main>
		</>
	);
};
export default Home;
