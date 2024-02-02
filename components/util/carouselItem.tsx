import Link from 'next/link';

type carouselItemProps = {
	width: number;
	data: {
		url: string;
		url_mobile: string;
		heading: string;
		para: string;
		link: string;
		button_text: string;
	};
	isActive: boolean;
};

const CarouselItem = ({ width, data, isActive }: carouselItemProps) => {
	return (
		<div
			className={`absolute w-full h-full bg-center bg-cover  transition-opacity duration-1000 ${
				isActive ? 'opacity-100 z-0' : 'opacity-0 -z-30 '
			}`}
			style={{
				backgroundImage: `${width >= 768 ? data.url : data.url_mobile}`,
			}}>
			<div className='wrapper-lg h-full  px-7  md:bg-black md:bg-opacity-40 md:items-start md:max-w-[50%] md:ml-0'>
				<div className='h-full flex flex-col items-center justify-center md:items-start md:ml-4 lg:ml-16 lg:mr-12 xl:ml-[50%]'>
					<h2 className='text-2xl font-semibold mt-8 mb-4 md:text-4xl'>
						{data.heading}
					</h2>
					<p className='md:text-lg '>{data.para}</p>
					<Link href={data.link} className='btn mt-8 lg:mt-12  xl:text-lg'>
						{data.button_text}
					</Link>
				</div>
			</div>
			<div className='bg-shadow'></div>
		</div>
	);
};

export default CarouselItem;
