import Header from '@/components/Header/Header';
import AboutUs from '@/components/AboutUs';
import Offer from '@/components/Offer';
import WhyUs from '@/components/WhyUs';
import Hero from '@/components/Hero';

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<AboutUs />
				<Offer />
				<Hero
					text='Nie znalazłeś szukanego szkolenia / wdrożenia lub potrzebujesz potrzebujesz pomocy przy wyborze ?'
				/>
				<WhyUs />
			</main>
		</>
	);
}
