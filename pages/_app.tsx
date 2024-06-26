import Layout from '@/components/layout/homeLayout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Head>
				<meta httpEquiv='content-language' content='pl' />

				<link
					rel='apple-touch-icon'
					sizes='120x120'
					href='favicons/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='favicons/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='favicons/favicon-16x16.png'
				/>
				<link rel='manifest' href='/public/favicons/site.webmanifest' />
				<link
					rel='mask-icon'
					href='/public/favicons/safari-pinned-tab.svg'
					color='#5bbad5'
				/>
				<meta name='msapplication-TileColor' content='#da532c' />
				<meta name='theme-color' content='#ffffff' />
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}
