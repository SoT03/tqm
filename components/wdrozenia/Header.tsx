import { useWindowSize } from '@/hooks/useWindowSize';
type HeaderProps = {
	data: {
		img_mobile: string;
		img: string;
		title: string;
		content: string;
	};
};

const Header = ({ data }: HeaderProps) => {
	const size = useWindowSize();

	return (
		<header
			style={{
				backgroundImage: `url('${
					size.width >= 768 ? data.img : data.img_mobile
				}')`,
			}}
			className='mt-16 relative bg-center bg-cover text-white  z-0'>
			<div className='wrapper flex flex-col items-center gap-2 p-8 md:px-20 md:gap-6 lg:px-44 lg:py-12 lg:mt-20 xl:py-20 xl:px-60'>
				<h1 className='text-2xl font-bold text-shadow md:text-4xl'>
					{data.title}
				</h1>
				<p className='text-shadow lg:text-xl'>{data.content}</p>
			</div>
			<div className='bg-shadow '></div>
		</header>
	);
};

export default Header;
