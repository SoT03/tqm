type SectionProps = {
	children: React.ReactNode;
	id: string;
	classes?: string;
};

const Section = ({ children, id, classes }: SectionProps) => {
	return (
		<section id={id} className={`text-blue-600 ${classes}`}>
			<div className='wrapper'>{children}</div>
		</section>
	);
};

export default Section;
