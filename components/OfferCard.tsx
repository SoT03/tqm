import Link from 'next/link';


type CardProps = {
	data: {
		title: string | undefined;
		text: string;
		link: string;
		newForm?: boolean;
	};
};

const Card = ({ data }: CardProps) => {
	return (
		<div className='relative flex flex-col overflow-hidden  shadow-sm shadow-gray-500 bg-zinc-50 rounded-md  py-6 px-4 max-w-[300px] lg:max-w-[360px]  md:p-8'>
			<div className='mb-6'>
				<h3 className='text-blue-700 font-bold text-lg mb-2'>{data.title}</h3>
				<p>{data.text}</p>
			</div>
			<Link
				className='text-sky-500 py-2 mx-4 border-2 border-sky-500  rounded-sm mt-auto text-center uppercase font-semibold md:mx-8 hover:scale-110 hover:bg-sky-500 hover:text-white transition-all duration-300'
				href={data.link}>
				Zobacz szczegóły
			</Link>
			{data.newForm && (
				<p className='absolute top-0 right-0 bg-red-700 text-white rounded-sm p-2 md:px-4'>
					Nowa Norma!
				</p>
			)}
		</div>
	);
};
export default Card;
