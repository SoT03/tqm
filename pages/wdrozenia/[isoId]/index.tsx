import fs from 'fs';
import path from 'path';
import { GetStaticProps } from 'next';

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

const Details = () => {
	console.log();
	return <h1></h1>;
};
export default Details;
