type SectionTitleProps = {
	title: string;
	classes?: string;
};

const SectionTitle = ({ title, classes }: SectionTitleProps) => {
	return (
		<h2
			className={`text-blue-800 font-bold text-3xl mb-2 text-center lg:text-2xl lg:mb-1 ${classes}`}>
			{title}
		</h2>
	);
};

export default SectionTitle;
