import fs from 'fs';
import path from 'path';
import { GetStaticProps } from 'next';
import { IconCertificate, IconSettingsUp } from '@tabler/icons-react';

export const getStaticPaths = async () => {
	const filePath = path.join(process.cwd(), 'data', 'implementationData.json');
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
	const filePath = path.join(process.cwd(), 'data', 'implementationData.json');
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
			benefits: { title: string; text: string }[];
			description: string;
		};
	};
};

const Details = ({ data }: DetailsProps) => {
	return (
		<>
			<header className='mt-16 p-10 md:mt-24'>
				<div className='wrapper text-center'>
					<div>
						<h1 className='text-3xl font-bold mb-2 md:text-5xl md:mb-4'>
							Wdrożenie {data.name}
						</h1>
						<h2 className='text-xl md:text-2xl'>{data.info.desc}</h2>
					</div>
				</div>
			</header>
			<main>
				<section className='md:mb-10'>
					<div className='wrapper flex  p-8 md:px-16 md:items-center md:gap-4lg:px-0 '>
						<IconSettingsUp className='stroke-1 hidden md:block w-1/3 h-32' />
						<div className='md:w-2/3'>
							<h3 className='text-sky-600 text-xl font-semibold mb-2 md:text-2xl'>
								Czym jest ?
							</h3>
							<p className='lg:text-lg'>{data.info.description}</p>
						</div>
					</div>
				</section>
				<section className='mb-20'>
					<div className='wrapper lg:flex '>
						<div className='bg-slate-800 font-bold text-white text-3xl p-10 text-center lg:w-1/4 lg:flex lg:items-center lg:text-4xl lg:text-left '>
							Korzyści płynące z wdrożenia {data.name}
						</div>
						<div className='bg-slate-100 lg:w-3/4'>
							<ul className='p-10'>
								{data.info.benefits.map((benefit) => (
									<li key={benefit.title} className='list-disc my-4 '>
										<span className='font-bold text-sky-600'>
											{' '}
											{benefit.title}
										</span>
										: {benefit.text}
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};
export default Details;
