import Link from 'next/link';
import SectionHr from '../util/section/Sectionhr';
import { IconArrowBigRightLine } from '@tabler/icons-react';

type RowProps = {
	data: {
		title: string;
		newForm?: boolean;
		trainings: { title: string; desc: string; link: string }[];
	};
};

const TrainingRow = ({ data }: RowProps) => {
	return (
		<div className='my-14 relative'>
			<div className='mb-6'>
				<h2 className='text-4xl font-bold text-center mb-1 lg:text-left'>
					{data.title}
				</h2>
				<SectionHr />
			</div>
			<ul>
				{data.trainings.map((training) => (
					<li
						className='group my-4 md:p-6 hover:bg-slate-100 transition-colors duration-500 cursor-pointer'
						key={training.title}>
						<Link href={training.link}>
							<h3 className='text-2xl font-bold duration-300 group-hover:text-sky-600 transition-colors  mb-2'>
								{training.title}
							</h3>
							<div className='ml-4'>
								<p className='mb-2 '>{training.desc}</p>
								<IconArrowBigRightLine className='text-sky-600 group-hover:translate-x-4 duration-500 transition-transform' />
							</div>
						</Link>
					</li>
				))}
			</ul>
			{data.newForm && (
				<p className='absolute top-9 right-0 bg-red-700 text-white rounded-sm p-1 md:px-4 md:py-2 md:right-12 md:top-0 lg:right-2/3'>
					Nowa Norma!
				</p>
			)}
		</div>
	);
};

export default TrainingRow;
