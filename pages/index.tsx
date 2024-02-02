import Header from '@/components/Header/Header';
import AboutUs from '@/components/AboutUs';
import Offer from '@/components/Offer';

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<AboutUs />
				<Offer />
			</main>
		</>
	);
}
