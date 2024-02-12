import Section from '../util/section/Section';
import SectionTitle from '../util/section/SectionTitle';
import data from '../../data/trainingData.json';
import TrainingRow from './row';

const trainings = [
	{
		title: 'ISO:9001',
		trainings: [
			{
				title: 'Pełnomocnik ds. Systemu Zarządzania Jakością',
				desc: 'Szkolenie Pełnomocnika ds. systemu zarządzania jakością ISO 9001:2015 jest kluczowe, ponieważ umożliwia mu skuteczne nadzorowanie, wdrażanie i doskonalenie systemu zarządzania jakością, co przyczynia się do poprawy jakości produktów/usług oraz zwiększenia efektywności i zaufania klientów.',
				link: '/szkolenia/iso9001-pelnomocnik-ds-systemu-zarzadzania-jakoscia/',
			},
			{
				title: 'Audytor wewnętrzny SZJ ISO 9001:2015',
				desc: 'Szkolenie audytora wewnętrznego SZJ ISO 9001:2015 jest istotne, ponieważ umożliwia osobie przeprowadzanie skutecznych i efektywnych audytów wewnętrznych, co pomaga w zapewnieniu zgodności z wymaganiami normy ISO 9001:2015 oraz ciągłym doskonaleniu systemu zarządzania jakością w organizacji.',
				link: '/szkolenia/iso9001-audytor-wewnetrzny/',
			},
			{
				title: 'Wymagania normy ISO 9001:2015',
				desc: 'Szkolenie w zakresie wymagań normy ISO 9001 jest niezbędne, aby organizacje mogły zrozumieć i skutecznie wdrożyć zasady zarządzania jakością, co prowadzi do poprawy procesów, zwiększenia satysfakcji klientów oraz osiągnięcia lepszych wyników biznesowych.',
				link: '/szkolenia/iso9001-wymagania-normy/',
			},
		],
	},
	{
		title: 'ISO:14001',
		trainings: [
			{
				title: 'Pełnomocnik ds. Systemu Zarządzania Środowiskowego',
				desc: 'Szkolenie Pełnomocnika ds. Systemu Zarządzania Środowiskowego jest istotne, ponieważ umożliwia mu skuteczne nadzorowanie wdrażania i utrzymania standardów środowiskowych w organizacji, co przyczynia się do minimalizacji wpływu działalności firmy na środowisko oraz zapewnienia zgodności z przepisami i normami dotyczącymi ochrony środowiska.',
				link: '/szkolenia/iso14001-pelnomocnik-ds-systemu-zarzadzania-srodowiskowego/',
			},
			{
				title: 'Audytor wewnętrzny  ISO 14001',
				desc: 'Szkolenie audytora wewnętrznego ISO 14001 jest istotne, ponieważ umożliwia mu skuteczne przeprowadzanie audytów środowiskowych, identyfikację obszarów poprawy, zapewnienie zgodności z wymaganiami normy oraz ciągłe doskonalenie systemu zarządzania środowiskowego organizacji.',
				link: '/szkolenia/iso14001-audytor-wewnetrzny/',
			},
			{
				title: 'Wymagania normy ISO 14001:2015',
				desc: 'Szkolenie w zakresie wymagań normy ISO 14001 jest kluczowe, ponieważ umożliwia organizacjom skuteczne zarządzanie środowiskowe, identyfikację i redukcję negatywnego wpływu na środowisko oraz zapewnienie zgodności z przepisami i normami dotyczącymi ochrony środowiska.',
				link: '/szkolenia/iso14001-wymagania-normy/',
			},
		],
	},
	{
		title: 'ISO:27001',
		newForm: true,
		trainings: [
			{
				title: 'Pełnomocnik ds. Systemu Zarządzania Bezpieczeństwem Informacji',
				desc: 'Szkolenie Pełnomocnika ds. Systemu Zarządzania Bezpieczeństwem Informacji jest niezbędne dla efektywnego zapewnienia ochrony danych oraz przeciwdziałania zagrożeniom cybernetycznym w organizacji poprzez właściwe wdrożenie, monitorowanie i doskonalenie systemu zarządzania bezpieczeństwem informacji.',
				link: '/szkolenia/iso27001-pelnomocnik-ds-systemu-zarzadzania-bezpieczenstwem-informacji/',
			},
			{
				title: 'Audytor wewnętrzny ISO 27001',
				desc: 'Szkolenie audytora wewnętrznego ISO 27001 jest istotne, ponieważ umożliwia mu skuteczne przeprowadzanie audytów związanych z zarządzaniem bezpieczeństwem informacji, identyfikację obszarów poprawy, zapewnienie zgodności z wymaganiami normy oraz ciągłe doskonalenie systemu zarządzania bezpieczeństwem informacji organizacji.',
				link: '/szkolenia/iso27001-audytor-wewnetrzny/',
			},

			{
				title: 'Wymagania normy ISO 27001:2022',
				desc: 'Szkolenie w zakresie wymagań normy ISO 27001:2022 jest kluczowe, ponieważ umożliwia organizacjom skuteczne zarządzanie bezpieczeństwem informacji, identyfikację oraz minimalizację ryzyk związanych z cyberzagrożeniami, a także zapewnienie zgodności z międzynarodowymi standardami w dziedzinie bezpieczeństwa informacji.',
				link: '/szkolenia/iso27001-wymagania-normy/',
			},
		],
	},
	{
		title: 'ISO:45001',

		trainings: [
			{
				title: 'Pełnomocnik ds. Systemu Zarządzania BHP',
				desc: 'Szkolenie Pełnomocnika ds. Systemu Zarządzania BHP jest kluczowe, ponieważ umożliwia skuteczne nadzorowanie, wdrażanie i utrzymanie standardów bezpieczeństwa i higieny pracy, co przyczynia się do minimalizacji ryzyka wypadków i zachorowań zawodowych oraz zapewnienia bezpiecznego i zdrowego środowiska pracy dla pracowników.',
				link: '/szkolenia/iso45001-pelnomocnik-ds-systemu-zarzadzania-bhp/',
			},
			{
				title: 'Audytor wewnętrzny ISO 45001',
				desc: 'Szkolenie audytora wewnętrznego ISO 45001 jest istotne, ponieważ umożliwia mu skuteczne przeprowadzanie audytów związanych z zarządzaniem bezpieczeństwem i higieną pracy, identyfikację obszarów poprawy, zapewnienie zgodności z wymaganiami normy oraz ciągłe doskonalenie systemu zarządzania bezpieczeństwem i higieną pracy organizacji.',
				link: '/szkolenia/iso45001-audytor-wewnetrzny/',
			},

			{
				title: 'Wymagania normy ISO 45001',
				desc: 'Szkolenie w zakresie wymagań normy ISO 27001:2022 jest kluczowe, ponieważ umożliwia organizacjom skuteczne zarządzanie bezpieczeństwem informacji, identyfikację oraz minimalizację ryzyk związanych z cyberzagrożeniami, a także zapewnienie zgodności z międzynarodowymi standardami w dziedzinie bezpieczeństwa informacji.',
				link: '/szkolenia/iso45001-wymagania-normy/',
			},
		],
	},
];

const MainSection = () => {
	return (
		<Section id='szkolenia'>
			<div className='mb-12'>
				<SectionTitle title='Oferta Szkoleń' />
				<p className='mt-6 text-center lg:px-44'>
					Po ukończeniu naszych szkoleń, otrzymujesz nie tylko certyfikat, ale
					przede wszystkim pewność siebie i gotowość do wyzwań, które napotkasz
					w praktyce. Nasze szkolenia to nie tylko inwestycja w Twoją wiedzę,
					ale również w Twoją przyszłość zawodową.
				</p>
			</div>
			{trainings.map((item) => (
				<TrainingRow data={item} key={item.title} />
			))}
		</Section>
	);
};

export default MainSection;
