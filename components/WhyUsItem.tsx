import Image from 'next/image';

type ItemProps = {
	data: {
		icon: string;
		text: string;
		alt: string;
	};
};

const WhyUsItem = ({ data }: ItemProps) => {
	return (
		<div className='flex flex-col items-center shadow-sm shadow-gray-400 px-4 py-6 gap-6 text-center border-[1px] border-gray-300 max-w-[260px]'>
			<Image src={data.icon} width={64} height={64} alt={data.alt} />
			<h2>{data.text}</h2>
		</div>
	);
};

export default WhyUsItem;
