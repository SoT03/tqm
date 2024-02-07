import { useState } from 'react';
import { IconMinus } from '@tabler/icons-react';

type RowProps = {
	title: string;
	content: JSX.Element;
};

const PrivacyPolicyRow = ({ title, content }: RowProps) => {
	const [accordionOpen, setAccordionOpen] = useState(false);

	return (
		<div className='py-2   my-3 border-2 relative md:mx-10 md:my-5 lg:my-7'>
			<button
				onClick={() => setAccordionOpen(!accordionOpen)}
				className='flex justify-between w-full px-8'>
				<span>{title}</span>

				<IconMinus className='absolute right-2 text-blue-400' />

				<IconMinus
					className={`absolute right-2 text-blue-400 transition-transform duration-300 ${
						accordionOpen ? 'rotate-0' : 'rotate-90'
					}`}
				/>
			</button>
			<div
				className={`grid  overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
					accordionOpen
						? 'grid-rows-[1fr] opacity-100 my-4'
						: 'grid-rows-[0fr] opacity-0'
				}`}>
				<div className='overflow-hidden px-3 md:px-10'>{content}</div>
			</div>
		</div>
	);
};

export default PrivacyPolicyRow;
