import Header from '@/components/wdrozenia/Header';
import MainSection from '@/components/szkolenia/main';

const Home = () => {
	return (
		<>
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
			</main>
		</>
	);
};
export default Home;
