import fs from 'fs';
import path from 'path';
import { GetStaticProps } from 'next';
import { IconBook, IconUserQuestion } from '@tabler/icons-react';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Head from 'next/head';

export const getStaticPaths = async () => {
	const filePath = path.join(process.cwd(), 'data', 'trainingData.json');
	const jsonData = fs.readFileSync(filePath, 'utf8');
	const isoItems = JSON.parse(jsonData);

	const paths = isoItems.map((item: { id: any }) => ({
		params: { isoId: item.id.toString() },
	}));

	return {
		fallback: false,
		paths: paths,
	};
};

export const getStaticProps = (async (context) => {
	const id: any = context.params?.isoId;
	const filePath = path.join(process.cwd(), 'data', 'trainingData.json');
	const jsonData = fs.readFileSync(filePath, 'utf8');
	const isoItems = JSON.parse(jsonData);

	const isoItem = isoItems.find((item: { id: string }) => item.id === id);

	return {
		props: { data: isoItem },
	};
}) satisfies GetStaticProps;

type DetailsProps = {
	data: {
		id: string;
		name: string;
		info: {
			desc: string;
			goal: string;
			forWho: { text: string; list: string[] };
		};
	};
};

const Details = ({ data }: DetailsProps) => {
	return (
		<>
			<Head>
				<title>Szkolenie ${data.name}</title>

				<meta
					name='description'
					content={`${data.name} wszystkie informacje o szkoleniu`}
				/>
			</Head>
			<header className='mt-16 p-10 md:mt-24'>
				<div className='wrapper text-center'>
					<div>
						<h1 className='text-3xl font-bold mb-2 md:text-5xl md:mb-4'>
							Szkolenie {data.name}
						</h1>
						<h2 className='text-xl md:text-2xl'>{data.info.desc}</h2>
					</div>
				</div>
			</header>

			<main>
				<section className='my-10'>
					<div className='wrapper lg:flex '>
						<div className='bg-slate-800 font-bold text-white text-3xl p-10 text-center md:flex md:items-center md:justify-center lg:w-1/4 lg:flex-col  lg:text-4xl lg:text-left '>
							<h3>Dla kogo</h3>
							<IconUserQuestion className='stroke-1 hidden md:block w-1/3 lg:w-full h-32' />
						</div>
						<div className='bg-slate-100 lg:w-3/4 '>
							<p className='px-10 pt-10  '>{data.info.forWho.text}</p>
							<ul className='px-10 py-6'>
								{data.info.forWho.list.map((item) => (
									<li className='list-disc'>{item}</li>
								))}
							</ul>
						</div>
					</div>
				</section>
				<section className='my-10'>
					<div className='wrapper lg:flex '>
						<div className='bg-slate-800 font-bold text-white text-3xl p-10 text-center md:flex md:items-center md:justify-center lg:w-1/4 lg:flex-col  lg:text-4xl lg:text-left '>
							<h3>Cel szkolenia</h3>
							<IconBook className='stroke-1 hidden md:block w-1/3 lg:w-full h-32' />
						</div>
						<div className='bg-slate-100 lg:w-3/4 '>
							<p className='p-10'>{data.info.goal}</p>
						</div>
					</div>
				</section>
				<Hero text='Masz pytanie dotyczące szkolenia lub potrzebujesz pomocy w wyborze ?' />
			</main>
		</>
	);
};
export default Details;
