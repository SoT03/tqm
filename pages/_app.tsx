import Layout from '@/components/layout/homeLayout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Head>
				<link rel='shortcut icon' href='img/favicon.ico' />
				<link rel='apple-touch-icon' sizes='180x180' href='img/favicon.ico' />
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}
