import Header from '@/components/wdrozenia/Header';
import MainSection from '@/components/szkolenia/main';
import Hero from '@/components/Hero';
import Head from 'next/head';

const Home = () => {
	return (
		<>
			<Head>
				<title>TQM Partners Doradztwo: Szkolenia</title>

				<meta
					name='description'
					content='Bogata oferta szkoleń na audytora, pełnomocnika oraz szkolenia norm ISO'
				/>
			</Head>
			<Header
				data={{
					img: '/img/szkolenia/startup_big.jpg',
					img_mobile: '/img/szkolenia/startup_small.jpg',
					title: 'Szkolenia',
					content:
						'Nasze szkolenia to nie tylko przekazanie wiedzy, ale także interaktywne doświadczenie, które angażuje każdego uczestnika. Poprzez praktyczne przykłady, studia przypadków oraz aktywne dyskusje, zapewniamy środowisko, które stymuluje kreatywność i wspiera rozwój umiejętności. Nasz cel jest jasny - chcemy zapewnić Ci nie tylko wiedzę teoretyczną, ale przede wszystkim praktyczne narzędzia i umiejętności, które zrewolucjonizują Twoje podejście do zarządzania jakością.',
				}}
			/>
			<main>
				<MainSection />
				<Hero text='Nie znalazłeś szkolenia którego szukasz lub potrzebujesz pomocy przy wyborze ?' />
			</main>
		</>
	);
};
export default Home;
