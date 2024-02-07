import PrivacyPolicyRow from '@/components/PrivacyPolicyRow';
import Link from 'next/link';

const cookiesData = [
	{
		id: 1,
		name: 'Postanowienia ogólne',
		text: (
			<p>
				Niniejsza polityka prywatności ma charakter informacyjny i zawiera
				przede wszystkim zasady dotyczące przetwarzania danych osobowych przez
				Administratora, w tym podstawy, cele i zakres przetwarzania danych
				osobowych oraz prawa osób, których dane dotyczą, a także informacje w
				zakresie stosowania plików cookies oraz narzędzi analitycznych.
			</p>
		),
	},
	{
		id: 2,
		name: 'Administrator',
		text: (
			<p>
				Administratorem Danych Osobowych pozyskanych w ramach prowadzonej
				działalności w tym za pośrednictwem strony internetowej jest TQM
				Partners Spółka z o . o. z siedzibą w Lesznie ul. Tuwima 16/33, 05-084
				Leszno k/Warszawy; wpisaną do Rejestru Przedsiębiorców Krajowego
				Rejestru Sądowego, dla której prowadzi akta rejestrowe pod numerem Sąd
				Rejonowy dla m.st Warszawy w Warszawie, XIV Wydział Gospodarczy
				Krajowego Rejestru Sądowego prowadzi akta rejestrowe pod numerem nr. KRS
				0001071346, posiadającą numer identyfikacji podatkowej NIP 1182273789
				oraz statystyczny numer identyfikacyjny REGON 527027590 - zwana dalej
				„Administratorem” i będąca jednocześnie Właścicielem Strony
				Internetowej.
			</p>
		),
	},
	{
		id: 3,
		name: 'Inspektor ochrony danych osobowych',
		text: (
			<p>
				Administrator nie wyznaczył Inspektora Ochrony Danych, a wszelkie
				czynności określone dla Inspektora Ochrony danych realizuje wyznaczony
				pracownik Spółki z którym w sprawach dotyczących przetwarzania Państwa
				danych osobowych lub realizacji swoich praw, możecie się Państwo
				kontaktować za pośrednictwem poczty elektronicznej pod adresem e-mail:{' '}
				{
					<Link className='text-red-700' href='mailto:j.goldych@tqmpartners.pl'>
						j.goldych@tqmpartners.pl
					</Link>
				}{' '}
				lub telefonicznie +48 518 053 702
			</p>
		),
	},
	{
		id: 4,
		name: 'Podstawa prawna',
		text: (
			<p>
				Dane osobowe pozyskane w ramach prowadzonej działalności w tym poprzez
				stronę internetowej{' '}
				<Link className='text-red-700 font-bold' href='www.tqmpartners.pl'>
					www.tqmpartners.pl
				</Link>{' '}
				przetwarzane są przez Administratora zgodnie z obowiązującymi przepisami
				prawa, w szczególności zgodnie z rozporządzeniem Parlamentu
				Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie
				ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w
				sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy
				95/46/WE (ogólne rozporządzenie o ochronie danych) - zwane dalej „RODO”
				lub „Rozporządzenie RODO”
			</p>
		),
	},
	{
		id: 5,
		name: 'Cel przetwarzania danych osobowych',
		text: (
			<>
				<p>
					Dane osobowe pozyskane w ramach prowadzonej działalności w tym poprzez
					stronę internetową $
					{<Link href='www.tqmpartners.pl'>www.tqmpartners.pl</Link>}{' '}
					przetwarzane są przez Administratora zgodnie z:
				</p>
				<ul className='mt-2 list-disc '>
					<li className='text-blue-400'>
						<Link href='https://us-wbe-img2.gr-cdn.com/user/4be05620-fcc8-4022-8137-9365d621d8d3/d74ca720-f1bb-406e-87fd-24a4e007e45f.pdf'>
							{' '}
							klauzulą informacyjną korespondencja
						</Link>
					</li>
					<li>klauzulą informacyjną kontrahent</li>
					<li>klauzulą informacyjną pracownicy</li>
					<li>klauzulą informacyjną newsletter</li>
					<li>klauzulą informacyjną Facebook</li>
				</ul>
			</>
		),
	},
	{
		id: 6,
		name: 'Polityka Plików Cookie TQM Partners Sp. z o. o.',
		text: (
			<>
				<div className='my-4'>
					<h3 className='text-lg text-red-700 font-bold'>WPROWADZENIE</h3>
					<p>
						Nasza strona internetowa,{' '}
						<Link className='text-red-700 font-bold' href='www.tqmpartners.pl'>
							www.tqmpartners.pl
						</Link>{' '}
						(dalej: „strona internetowa”) używa plików cookie i innych
						powiązanych technologii (dla wygody wszystkie technologie są
						określane jako „pliki cookie”). Pliki cookie są również umieszczane
						przez osoby trzecie. W poniższym dokumencie informujemy o
						korzystaniu z plików cookie na naszej stronie internetowej.
					</p>
				</div>
				<div className='my-4'>
					<h3 className='text-lg text-red-700 font-bold'>CZYM SĄ COOKIES?</h3>
					<p>
						Plik cookie to niewielki prosty plik wysyłany wraz ze stronami tej
						witryny i przechowywany przez przeglądarkę na dysku twardym
						komputera lub innego urządzenia. Informacje w nich przechowywane
						mogą zostać zwrócone na nasze serwery lub do serwerów odpowiednich
						stron trzecich podczas kolejnej wizyty.
					</p>
				</div>
				<div className='my-4'>
					<h3 className='text-lg text-red-700 font-bold'>CZYM SĄ SKRYPTY?</h3>
					<p>
						Skrypt to fragment kodu programu, który służy do prawidłowego i
						interaktywnego działania naszej witryny. Ten kod jest wykonywany na
						naszym serwerze lub na twoim urządzeniu.
					</p>
				</div>
				<div className='my-4'>
					<h3 className='text-lg text-red-700 font-bold'>
						CO TO JEST PIXEL TAG?
					</h3>
					<p>
						Web beacon (lub znacznik pikselowy) to mały, niewidoczny fragment
						tekstu lub obrazu na stronie internetowej, który służy do
						monitorowania ruchu na stronie internetowej. Aby to zrobić, różne
						dane o tobie są przechowywane przy użyciu web beaconów.
					</p>
				</div>
			</>
		),
	},
	{
		id: 7,
		name: 'Pliki Cookies',
		text: (
			<>
				<div className='my-4'>
					<h3 className='text-lg text-red-700 font-bold'>
						Ciasteczka techniczne lub funkcjonalne
					</h3>
					<p>
						Niektóre pliki cookie zapewniają prawidłowe działanie niektórych
						części witryny i poznanie preferencji użytkownika. Umieszczając
						funkcjonalne pliki cookie, ułatwiamy odwiedzanie naszej strony
						internetowej. W ten sposób nie musisz wielokrotnie wprowadzać tych
						samych informacji podczas odwiedzania naszej strony internetowej i,
						na przykład, przedmioty pozostają w koszyku, dopóki nie zapłacisz.
						Możemy umieścić te pliki cookie bez Twojej zgody.
					</p>
				</div>
				<div className='my-4'>
					<h3 className='text-lg text-red-700 font-bold'>Cookie analityczne</h3>
					<p>
						Używamy analitycznych plików cookie, aby zoptymalizować korzystanie
						ze strony internetowej dla naszych użytkowników. Dzięki tym
						analitycznym plikom cookie uzyskujemy wgląd w korzystanie z naszej
						witryny. Prosimy o zgodę na umieszczanie analitycznych plików
						cookie.
					</p>
				</div>
				<div className='my-4'>
					<h3 className='text-lg text-red-700 font-bold'>
						Przyciski social media
					</h3>
					<p>
						Na naszej stronie umieściliśmy przyciski dla Facebook, aby promować
						strony internetowe (np. „Lubię” / „Like", „przypinać” / „Pin") lub
						udostępniać (np. „Tweetować”) w sieciach społecznościowych, takich
						jak Facebook. Ten przycisk działa przy użyciu fragmentów kodu
						pochodzący od samego Facebook. Ten kod umieszcza pliki cookie. Ten
						przycisk mediów społecznościowych może również przechowywać i
						przetwarzać określone informacje, dzięki czemu można wyświetlać
						spersonalizowane reklamy. Przeczytaj oświadczenie o ochronie
						prywatności tych sieci społecznościowych (które mogą się regularnie
						zmieniać), aby dowiedzieć się, jak są przetwarzane dane za pomocą
						tych plików cookie. Odzyskiwane dane są w miarę możliwości
						zanonimizowane.
					</p>
				</div>
				<div className='my-4'>
					<h3 className='text-lg text-red-700 font-bold'>
						UMIESZCZONE PLIKI COOKIE
					</h3>
					<p>
						Wśród umieszczonych plików znajdują się m.in. pliki związane z
						działaniem narzędzi analitycznych (Google Analytics), prezentacji
						filmowych (YouTube), map (Google Maps), systemu komentarzy (Ceneo) a
						także skrypty niezbędne do działania sklepu. Pełną listę plików
						znajdą Państwo klikając przycisk „dostosuj” odwiedzając nasz sklep
						po raz pierwszy.
					</p>
				</div>
				<div className='my-4'>
					<h3 className='text-lg text-red-700 font-bold'>ZGODA</h3>
					<p>
						Kiedy odwiedzasz naszą stronę po raz pierwszy, pokażemy Ci
						wyskakujące okienko z wyjaśnieniem dotyczącym plików cookie. Po
						kliknięciu przycisku "Akceptuj" wyrażasz zgodę na używanie przez nas
						kategorii plików cookie i wtyczek wybranych w wyskakującym okienku,
						jak opisano w tym oświadczeniu dotyczącym plików cookie. Możesz
						wyłączyć korzystanie z plików cookie za pośrednictwem przeglądarki,
						lub dostosować zakres ich działalności poprzez przycisk „Dostosuj”
						ale pamiętaj, że nasza witryna może już nie działać poprawnie.
					</p>
				</div>
			</>
		),
	},
	{
		id: 8,
		name: 'Twoje Prawa w Odniesieniu do Danych Osobowych',
		text: (
			<div>
				<h2>
					Masz następujące prawa w odniesieniu do swoich danych osobowych:
				</h2>
				<ul className='list-disc mb-2'>
					<li className='mt-2'>
						Masz prawo wiedzieć, dlaczego Twoje dane osobowe są potrzebne, co
						się z nimi stanie i jak długo będą przechowywane.
					</li>
					<li>
						Prawo dostępu: masz prawo dostępu do znanych nam danych osobowych.
					</li>
					<li>
						Prawo do sprostowania: masz prawo do uzupełnienia, poprawienia,
						usunięcia lub zablokowania danych osobowych w dowolnym momencie.
					</li>
					<li>
						Jeśli wyrazisz zgodę na przetwarzanie swoich danych, masz prawo
						odwołać tę zgodę i usunąć swoje dane osobowe.
					</li>
					<li>
						Prawo do przekazywania danych: masz prawo zażądać od administratora
						wszystkich swoich danych osobowych i przekazać je w całości innemu
						kontrolerowi.
					</li>
					<li>
						Prawo do sprzeciwu: możesz sprzeciwić się przetwarzaniu danych.
						Przestrzegamy tego, chyba że istnieją uzasadnione podstawy do
						przetwarzania
					</li>
				</ul>
				<p>
					Aby skorzystać z tych praw, skontaktuj się z nami. Proszę odnieść się
					do danych kontaktowych na dole tego oświadczenia cookie. Jeśli wnosisz
					skargę dotyczącą sposobu postępowania z Twoimi danymi, chcielibyśmy
					usłyszeć od Ciebie, ale masz również prawo złożyć skargę do organu
					nadzorczego tj. Urzędu Ochrony Danych Osobowych.
				</p>
			</div>
		),
	},
	{
		id: 9,
		name: 'Włączenie/Wyłączenie i Usuwanie Plików Cookie',
		text: (
			<p>
				Możesz użyć przeglądarki internetowej do automatycznego lub ręcznego
				usuwania plików cookie. Możesz również określić, że niektóre pliki
				cookie mogą nie być umieszczane. Inną opcją jest zmiana ustawień
				przeglądarki internetowej, tak aby otrzymywać komunikat za każdym razem,
				gdy plik cookie zostanie umieszczony. Aby uzyskać więcej informacji na
				temat tych opcji, zapoznaj się z instrukcjami w sekcji pomocy
				przeglądarki. Pamiętaj, że nasza witryna może nie działać poprawnie,
				jeśli wszystkie pliki cookie są wyłączone. Jeśli usuniesz pliki cookie w
				swojej przeglądarce, zostaną one ponownie umieszczone po wyrażeniu zgody
				podczas ponownego odwiedzania naszych stron internetowych.
			</p>
		),
	},
];

const PrivacyPolicy = () => {
	return (
		<>
			<header className='mt-24 md:mt-32'>
				<h1 className='text-2xl text-center font-bold'>
					Polityka Prywatności TQM Partners Sp. z o. o.
				</h1>
			</header>
			<main className='py-6 md:py-10'>
				<section>
					<div className='wrapper px-4'>
						{cookiesData.map((cookie) => (
							<PrivacyPolicyRow
								key={cookie.id}
								title={cookie.name}
								content={cookie.text}
							/>
						))}
					</div>

					<Link
						href='/#contact'
						className='btn block mt-10 mb-4 w-2/3 max-w-[360px] mx-auto text-center text-white lg:mt-16'>
						Skontaktuj się z nami
					</Link>
				</section>
			</main>
		</>
	);
};

export default PrivacyPolicy;
