import Head from 'next/head';
import Footer from './footer';
import Navbar from './navbar';
import CookieConsentBanner from '../cookie';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
			<CookieConsentBanner />
		</>
	);
};

export default Layout;
