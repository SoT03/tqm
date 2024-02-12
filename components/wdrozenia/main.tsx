import Section from '../util/section/Section';
import SectionTitle from '../util/section/SectionTitle';

import data from '../../data/implementationData.json';
import Card from '../OfferCard';

const MainSection = () => {
	

	return (
		<Section id='wdrozenia'>
			<div className='mb-12'>
				<SectionTitle title='Oferta wdrożeń systemów zarządzania' />
				<p className='mt-6'>
					Wysoka jakość produktów lub usług to podstawa, na którą zwracają uwagę
					klienci. Ich potwierdzeniem jest certyfikat ISO. Wdrożenie
					poszczególnych systemów ISO nie tylko poprawi funkcjonowanie Twojej
					firmy i zwiększy jej prestiż, ale przede wszystkim wpłynie na zaufanie
					Klientów - zwłaszcza tych, którzy z oferty będą korzystać po raz
					pierwszy oraz klientów instytucjonalnych
				</p>
			</div>
			<div className='flex  gap-12  justify-center flex-wrap mb-12  lg:gap-16 lg:mb-16'>
				{data.map((item) => (
					<Card
						key={item.id}
						data={{
							link: item.info.link,
							text: item.info.desc,
							title: item.name,
							newForm: item.newForm,
						}}
					/>
				))}
			</div>
		</Section>
	);
};

export default MainSection;
