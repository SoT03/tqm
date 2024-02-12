import fs from 'fs';
import path from 'path';
import { GetStaticProps } from 'next';
import { IconBook } from '@tabler/icons-react';
import Link from 'next/link';

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

			<main></main>
		</>
	);
};
export default Details;
