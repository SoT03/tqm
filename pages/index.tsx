import Header from '@/components/Header/Header';
import AboutUs from '@/components/AboutUs';
import Offer from '@/components/Offer';
import WhyUs from '@/components/WhyUs';

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<AboutUs />
				<Offer />
				<WhyUs />
			</main>
		</>
	);
}
