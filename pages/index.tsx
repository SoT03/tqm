import Header from '@/components/Header/Header';
import AboutUs from '@/components/AboutUs';
import Offer from '@/components/Offer';
import WhyUs from '@/components/WhyUs';
import Hero from '@/components/Hero';
import Contact from '@/components/Contact';
import Head from 'next/head';

// export const metadata: Metadata = {
// 	title: 'TQM Partners Doradztwo: Systemy zarządzania',
// 	description:
// 		'Od ponad 15 lat zajmujemy się szkoleniem orz wdrażaniem systemów zarządzania w firmach. Każde zlecenie traktujemy indywidualnie powołując zespół do zrealizowania projektu. ',
// };

export default function Home() {
	return (
		<>
			<Head>
				<title>TQM Partners Doradztwo: Systemy zarządzania</title>
				<link rel='canonical' href='https://tqmpartners.pl/' />
				<meta
					property='og:title'
					content='TQM Partners Doradztwo: Systemy zarządzania'
				/>
				<meta property='og:url' content='www.tqmpartner.pl' />
				<meta
					name='description'
					content='Wdrożenia, szkolenia i doradztwo to nasza pasja. Od 15 lat specjalizujemy się w systemach zarządzania'
				/>
			</Head>
			<Header />
			<main>
				<AboutUs />
				<Offer />
				<Hero text='Nie znalazłeś szukanego szkolenia / wdrożenia lub potrzebujesz potrzebujesz pomocy przy wyborze ?' />
				<WhyUs />
				<Contact />
			</main>
		</>
	);
}
