import { TablerIconsProps } from '@tabler/icons-react';
import Link from 'next/link';

type RowProps = {
	data: {
		icon: JSX.Element;
		text: string;
		href?: string;
		mobileOnly?: boolean;
	};
};

const ContactRow = ({ data }: RowProps) => {
	let content = <p>{data.text}</p>;

	if (data.href) {
		content = (
			<Link
				href={data.href}
				className={`${data.mobileOnly ? 'md:hidden' : ''}`}>
				{data.text}
			</Link>
		);
	}

	return (
		<div className='flex gap-2 my-2'>
			{data.icon} {content}{' '}
			{data.mobileOnly && <p className='hidden md:block'>{data.text}</p>}
		</div>
	);
};

export default ContactRow;
