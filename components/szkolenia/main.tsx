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
				title: 'Wymagania normy ISO 9001',
				desc: 'Szkolenie w zakresie wymagań normy ISO 9001 jest niezbędne, aby organizacje mogły zrozumieć i skutecznie wdrożyć zasady zarządzania jakością, co prowadzi do poprawy procesów, zwiększenia satysfakcji klientów oraz osiągnięcia lepszych wyników biznesowych.',
				link: '/szkolenia/iso9001-wymagania-normy/',
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
