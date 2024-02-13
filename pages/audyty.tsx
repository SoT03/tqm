import Hero from '@/components/Hero';
import Head from 'next/head';

const Audits = () => {
	const benefits = [
		{
			benefit: 'Poprawa jakości',
			description:
				'Audyty ISO pozwalają firmom ocenić i doskonalić swoje procesy oraz procedury, co prowadzi do podniesienia jakości produktów i usług oferowanych przez firmę.',
		},
		{
			benefit: 'Zwiększona efektywność',
			description:
				'Poprzez identyfikację obszarów do poprawy, audyty ISO pomagają w zwiększeniu efektywności działania firmy i optymalizacji procesów.',
		},
		{
			benefit: 'Zgodność z wymaganiami',
			description:
				'Audyty ISO umożliwiają firmom spełnienie wymagań określonych w normach ISO oraz innych przepisach i regulacjach branżowych.',
		},
		{
			benefit: 'Budowanie zaufania',
			description:
				'Posiadanie certyfikatu ISO stanowi potwierdzenie, że firma działa zgodnie z międzynarodowymi standardami, co buduje zaufanie zarówno wśród klientów, jak i partnerów biznesowych.',
		},
	];

	return (
		<>
			<Head>
				<title>TQM Partners Doradztwo: Audyty</title>

				<meta
					name='description'
					content='Przeprowadzamy audyty które pomogą zbadać mocne oraz słabe strony twojej firmy. Pomożemy ci także zwalczyć'
				/>
			</Head>
			<header className='mt-24 mb-16 px-8 md:mt-28 md:px-20 '>
				<div className='wrapper'>
					<h1 className='text-center text-3xl font-bold mb-4 md:text-5xl'>
						Audyty
					</h1>
					<p className='lg:px-20'>
						Audyty ISO to nieodłączny element w procesie doskonalenia systemów
						zarządzania oraz w zapewnianiu zgodności z międzynarodowymi
						standardami. Nasza firma specjalizuje się w przeprowadzaniu
						kompleksowych audytów zgodności z normami ISO, które pomagają firmom
						osiągnąć wyższy poziom jakości, efektywności i zgodności.
					</p>
				</div>
			</header>
			<main className=''>
				<div className='wrapper'>
					<section className='my-10 px-8 md:px-16'>
						<h2 className='text-center text-3xl font-bold mb-4 md:mb-6 lg:text-left'>
							Czym są audyty ISO?
						</h2>
						<p>
							Audyty ISO to niezależne i systematyczne badania, których celem
							jest ocena, weryfikacja i doskonalenie systemów zarządzania
							zgodnych z wymaganiami określonymi w normach ISO. Oferujemy audyty
							dla różnych standardów ISO, w tym ISO 9001 (Zarządzanie Jakością),
							ISO 14001 (Zarządzanie Środowiskowe), ISO 27001 (Bezpieczeństwo
							Informacji), ISO 45001 (Bezpieczeństwo i Higiena Pracy) oraz inne.
						</p>
					</section>
				</div>
				<Hero text='Masz pytanie dotyczące audytu lub potrzbujesz pomocy ? ' />
				<div className='wrapper'>
					<section className='px-8 my-10 md:px-16'>
						<h3 className='text-center text-2xl font-bold mb-4 md:mb-6 lg:text-left'>
							Jakie korzyści mogą przynieść audyty ISO Twojej firmie?
						</h3>
						<ul>
							{benefits.map((benefit) => (
								<li key={benefit.benefit} className='list-disc'>
									<span>{benefit.benefit}</span>
									<p>{benefit.description}</p>
								</li>
							))}
						</ul>
					</section>
				</div>
			</main>
		</>
	);
};

export default Audits;
