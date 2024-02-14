import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
	return (
		<Link
			href='https://tqmpartners.pl'
			className='flex items-center uppercase font-semibold text-white '>
			<p className='  lg:text-xl'>tqm</p>
			<img
				src='/img/logo.png'
				alt='TQM Partners'
				className='w-8 mx-1 md:w-12 md:h-8'
			/>{' '}
			<p className=' lg:text-xl '>Partners</p>
		</Link>
	);
};
export default Logo;
