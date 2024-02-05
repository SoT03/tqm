import { Span } from 'next/dist/trace';

type FormRowProps = {
	data: {
		label: string;
		labelId: string;
		required?: boolean;
		textarea?: boolean;
	};
};

const FormRow = ({ data }: FormRowProps) => {
	let content = (
		<input
			id={data.labelId}
			name={data.labelId}
			type='text'
			className='peer h-10 px-4 w-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-500'
			placeholder='john@doe.com'
		/>
	);

	if (data.textarea) {
		content = (
			<textarea
				id={data.labelId}
				name={data.labelId}
				className='peer h-28 px-4 w-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-500'
				placeholder='john@doe.com'
			/>
		);
	}

	return (
		<div className='relative my-6'>
			{content}
			<label
				htmlFor={data.labelId}
				className='absolute left-4 duration-300 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:left-0 peer-focus:text-gray-600 peer-focus:text-sm'>
				{data.label} {data.required && <span className='text-red-600'>*</span>}
			</label>
		</div>
	);
};

export default FormRow;
