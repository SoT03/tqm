import Section from './util/section/Section';
import SectionTitle from './util/section/SectionTitle';
import SectionHr from './util/section/Sectionhr';

const AboutUs = () => {
	return (
		<Section id='aboutus' classes='bg-slate-50'>
			<SectionTitle title='O nas' classes='lg:text-left ' />
			<SectionHr />
			<div className='mt-6 text-sm lg:flex lg:gap-6 xl:gap-16'>
				<div className='lg:w-2/3 '>
					<p className='mb-3'>
						<span className='text-red-700 font-semibold text-base'>
							TQM Partners Sp. z o. o.
						</span>{' '}
						jest jednostką szkoleniowo - doradczą specjalizującą się w
						dziedzinie organizacji i zarządzania, projektowania, wdrażania i
						rozwijania systemów zarządzania opartych o międzynarodowe Normy ISO
						w organizacjach o różnym profilu działalności.
					</p>{' '}
					<p>
						Naszym zadaniem jest wsparcie kadry zarządzającej w momencie
						wprowadzania istotnych zmian wynikających z wymagań prawnych,
						normatywnych dla podmiotów leczniczych. Siła naszego zespołu są
						konsultanci. To właśnie ich potencjał - wiedza teoretyczna i
						doświadczenie praktyczne zdobyte w podmiotach o różnych profilach
						połączone z elastycznością wobec wymagań rynku, klientów i postępu
						technologicznego i ciągłych zmian legislacyjnych tworzą nasze główne
						atuty. Zapał do pracy, kreatywność i ambicje Zespołu, wspierane
						przez doświadczoną kadrę - to solidny fundament, na którym opieramy
						naszą działalność, z sukcesem realizując powierzone nam zadania.
						100% naszego zespołu posiada kompetencje audytorów wiodących w
						poszczególnych normach systemów zarządzania.
					</p>
				</div>
				<div className='relative hidden w-1/3 shadow-sm shadow-black lg:block before:content-[""] before:absolute before:border-8 before:w-full before:h-full before:-top-8 before:-right-8 before:border-blue-800 xl:before:-right-12 xl:before:-top-12 xl:before:border-[0.8725rem] '>
					<img
						src='/img/fistBump.jpg'
						alt='Zdjęcie zespołu przybijającego żółwika'
						className='relative w-full h-full z-10'
					/>
				</div>
			</div>
		</Section>
	);
};

export default AboutUs;
