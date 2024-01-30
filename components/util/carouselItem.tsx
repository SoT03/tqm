type carouselItemProps = {
	width: number;
};

const CarouselItem = ({ width }: carouselItemProps) => {
	return (
		<div
			className='absolute w-full h-full bg-center bg-cover z-0'
			style={{
				backgroundImage: `${
					width >= 768
						? 'url(/img/course_big.jpg)'
						: 'url(/img/course_small.jpg)'
				}`,
			}}>
			<div className='bg-shadow'></div>
		</div>
	);
};

export default CarouselItem;
