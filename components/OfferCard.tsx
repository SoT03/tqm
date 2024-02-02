import Link from 'next/link';

type CardProps = {
	data: {
		title: string;
		text: string;
		link: string;
	};
};

const Card = ({ data }: CardProps) => {
	return (
		<div className='flex flex-col  shadow-sm shadow-gray-500 bg-zinc-50 rounded-md  py-6 px-4 max-w-[300px] lg:max-w-[360px]  md:p-8'>
			<div className='mb-6'>
				<h3 className='text-blue-700 font-bold text-lg mb-2'>{data.title}</h3>
				<p>{data.text}</p>
			</div>
			<Link
				className='text-sky-500 py-2 mx-4 border-2 border-sky-500  rounded-sm mt-auto text-center uppercase font-semibold'
				href={data.link}>
				Zobacz szczegóły
			</Link>
		</div>
	);
};
export default Card;
