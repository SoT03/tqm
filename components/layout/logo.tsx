import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
	return (
		<Link
			href='https://tqmpartners.pl'
			className='flex items-center uppercase font-semibold  '>
			<p className='  lg:text-2xl'>tqm</p>
			<img
				src='/img/logo.png'
				alt='TQM Partners'
				className='w-8 mx-1 md:w-12 md:h-8'
			/>{' '}
			<p className=' lg:text-2xl '>Partners</p>
		</Link>
	);
};
export default Logo;
