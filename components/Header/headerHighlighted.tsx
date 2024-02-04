type HighlightedSpanProps = {
	text: string;
};

const HighlightedSpan = ({ text }: HighlightedSpanProps) => {
	return (
		<span className='font-semibold text-2xl text-sky-300 md:text-4xl lg:text-5xl '>
			{text}
		</span>
	);
};

export default HighlightedSpan;
