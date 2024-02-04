type SectionProps = {
	children: React.ReactNode;
	id: string;
	classes?: string;
	style?: {};
};

const Section = ({ children, id, classes, style }: SectionProps) => {
	return (
		<section
			id={id}
			className={` text-black px-8 py-12 md:px-12 lg:py-16 xl:py-20 ${classes}`}
			style={style}>
			<div className=' wrapper'>{children}</div>
		</section>
	);
};

export default Section;
