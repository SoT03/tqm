import React, { useEffect, useState } from 'react';
import cookie from 'js-cookie';
import Link from 'next/link';

const CookieConsentBanner = () => {
	const [showBanner, setShowBanner] = useState(false);

	useEffect(() => {
		const consentCookie = cookie.get('cookieConsent');

		if (!consentCookie) {
			setShowBanner(true);
		}
	}, []);

	const handleAccept = () => {
		setShowBanner(false);
		cookie.set('cookieConsent', 'accepted', { expires: 365 });
	};

	const handleReject = () => {
		setShowBanner(false);
		cookie.set('cookieConsent', 'rejected', { expires: 365 });
	};

	if (!showBanner) {
		return null;
	}

	return (
		<div className='fixed top-0 left-0 w-full h-screen z-40 flex items-center justify-center  '>
			<div className='bg-white relative z-50 mx-1 rounded-md p-8 max-w-[420px] md'>
				<p className='text-2xl mb-4'>Nasza strona używa plików cookie</p>
				<p className=''>
					Używamy plików cookie i innych technologii śledzenia, aby poprawić
					jakość przeglądania naszej witryny, wyświetlać spersonalizowane treści
					i reklamy, analizować ruch w naszej witrynie i wiedzieć, skąd pochodzą
					nasi użytkownicy.{' '}
					<Link
						href='/politykaprywatnosci'
						className='text-sky-500 underline hover:text-sky-300'>
						Polityka cookie
					</Link>
					<div className='mt-10 flex items-center justify-around'>
						<button className='btn text-white' onClick={handleAccept}>
							Zaakceptuj
						</button>
						<button
							onClick={handleReject}
							className='btn--nocolor bg-gray-700 text-white hover:bg-slate-200 hover:text-gray-700'>
							Odrzuć
						</button>
					</div>
				</p>
			</div>
			<div className='bg-shadow '></div>
		</div>
	);
};

export default CookieConsentBanner;
