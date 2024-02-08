import fs from 'fs';
import path from 'path';
import { GetStaticProps, GetStaticPaths } from 'next';
import { arrayBuffer } from 'stream/consumers';

export async function getStaticPaths() {
	return {
		fallback: false,
		paths: [],
	};
}

export const getStaticProps = (async (context) => {
	const id: any = context.params?.isoId;
	const filePath = path.join(process.cwd(), 'data', 'implementationData.json');
	const jsonData = fs.readFileSync(filePath, 'utf8');
	const isoItems = JSON.parse(jsonData);

	const isoItem = isoItems.find((item: { id: string }) => item.id === id);

	console.log(isoItem);

	return {
		props: { data: isoItem },
	};
}) satisfies GetStaticProps;

const Details = () => {
	console.log();
	return <h1></h1>;
};
export default Details;
