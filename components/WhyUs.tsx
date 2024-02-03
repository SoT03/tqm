import WhyUsItem from './WhyUsItem';
import Section from './util/section/Section';
import SectionTitle from './util/section/SectionTitle';
import SectionHr from './util/section/Sectionhr';

const traitsData = [
	{
		icon: '/icons/target.png',
		text: 'Doświadczenie, kompetencje i wiedza merytoryczna',
		alt: 'Ikona strzały w tarczy',
	},
	{
		icon: '/icons/puzzle.png',
		text: 'Indywidualne rozwiązania przystosowane dla twojego biznesu',
		alt: 'Ikona puzzli',
	},
	{
		icon: '/icons/settings.png',
		text: 'Praktyczne narzędzia i metody pracy zmniejszające biurokrację i zbędne operacje',
		alt: 'Ikona Narzędzi',
	},
	{
		icon: '/icons/protected.png',
		text: 'Ułatwienie spełniania wymogów prawnych oraz Twoich klientów',
		alt: 'Ikona zatwierdzenia',
	},
	{
		icon: '/icons/note.png',
		text: 'Zwiększenie efektywności oraz wydajności twojej organizacji',
		alt: 'Ikona checklisty',
	},
	{
		icon: '/icons/handshake.png',
		text: 'Szybki kontakt, elastyczność oraz pomoc',
		alt: 'Uścisk dłoni',
	},
];

const WhyUs = () => {
	return (
		<Section classes='bg-slate-50 ' id='WhyUs'>
			<div className='xl:flex xl:gap-8 xl:items-center'>
				<div className='xl:w-1/3'>
					<SectionTitle
						title='Dlaczego warto z nami współpracować?'
						classes='md:px-20 xl:text-left xl:text-4xl xl:px-0 xl:mb-10'
					/>
					<SectionHr classes='md:ml-[50%] md:-translate-x-1/2 lg:w-1/2 mb-6 md:mb-10 xl:hidden' />
					<p className='text-sm md:px-12 xl:px-0 xl:text-base'>
						Dzięki naszemu interdyscyplinarnemu zespołowi ekspertów, realizujemy
						nawet najbardziej złożone projekty, co daje nam przewagę nad
						konkurencją. Znając Państwa oczekiwania od 2006 roku, dostosowujemy
						się do potrzeb klientów, traktując każde zlecenie indywidualnie.
						Nasza współpraca opiera się na partnerstwie, a naszym celem jest
						ciągłe podnoszenie jakości i rozwoju osobistego, aby zapewnić pełną
						satysfakcję z współpracy z TQM Partners Sp. z o. o.
					</p>
				</div>
				<div className='py-8 flex col gap-8 flex-wrap justify-center md:py-12 md:gap-2 xl:w-2/3 xl:py-0 xl:justify-end'>
					{traitsData.map((trait) => (
						<WhyUsItem data={trait} key={trait.alt} />
					))}
				</div>
			</div>
		</Section>
	);
};

export default WhyUs;
