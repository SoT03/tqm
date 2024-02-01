type SectionTitleProps = {
	title: string;
	classes?: string;
};

const SectionTitle = ({ title, classes }: SectionTitleProps) => {
	return <h2 className={`${classes}`}>{title}</h2>;
};

export default SectionTitle;
