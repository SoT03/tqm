type SectionProps = {
	children: React.ReactNode;
	id: string;
	classes?: string;
};

const Section = ({ children, id, classes }: SectionProps) => {
	return (
		<section
			id={id}
			className={`text-slate-800 px-8 py-12 md:px-12 lg:py-16 xl:py-20 ${classes}`}>
			<div className='wrapper'>{children}</div>
		</section>
	);
};

export default Section;
