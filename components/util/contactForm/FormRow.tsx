import { ChangeEvent, useState } from 'react';
type FormRowProps = {
	onChange: (
		e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
	) => void;

	label: string;
	labelId: string;
	required?: boolean;
	textarea?: boolean;
	type: string;
	check?: any;
	errMessage?: string;
	pattern?: boolean;
};

const FormRow = ({
	label,
	labelId,
	required,
	textarea,
	onChange,
	errMessage,
	type,
	pattern,
}: FormRowProps) => {
	const [isValid, setIsValid] = useState(true);

	const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

	const checkHandler = (
		e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
	) => {
		if (pattern) {
			setIsValid(emailRegex.test(e.target.value));
			onChange(e);
		} else if (e.target.validity.valid && e.target.value.trim().length > 2) {
			setIsValid(true);
			onChange(e);
		}
	};

	let content = (
		<input
			onInvalid={() => {
				setIsValid(false);
			}}
			onChange={checkHandler}
			required={required}
			id={labelId}
			name={labelId}
			type={type}
			className={`peer h-10 px-4 w-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-500 ${
				!isValid ? 'border-red-600' : ''
			}`}
			placeholder='john@doe.com'
		/>
	);

	if (textarea) {
		content = (
			<textarea
				onChange={checkHandler}
				required={required}
				onInvalid={() => {
					setIsValid(false);
				}}
				id={labelId}
				name={labelId}
				className={`peer h-28 px-4 w-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-500 lg:h-36 ${
					!isValid ? 'border-red-600' : ''
				}`}
				placeholder='john@doe.com'
			/>
		);
	}

	return (
		<div className='relative my-6 md:my-8'>
			{content}
			<label
				htmlFor={labelId}
				className='absolute left-4 duration-300 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:left-0 peer-focus:text-gray-600 peer-focus:text-sm'>
				{label} {required && <span className='text-red-600'>*</span>}
			</label>
			{!isValid && <p className='text-red-600 p-1'>{errMessage}</p>}
		</div>
	);
};

export default FormRow;
