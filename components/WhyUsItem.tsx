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
			<img src={data.icon} alt={data.alt} className='w-16 h-16' />
			<h2>{data.text}</h2>
		</div>
	);
};

export default WhyUsItem;
