import { useState } from 'react';
import FormRow from './FormRow';

const formRows = [
	{
		label: 'Imię i nazwisko',
		labelId: 'name',
		required: true,
		errMessage: 'Podaj imię i nazwisko.',
		type: 'text',
	},
	{
		label: 'Nazwa oragnizacji',
		labelId: 'orgName',
		type: 'text',
		required: false,
	},
	{
		label: 'Nr. telefonu',
		labelId: 'telNumber',
		type: 'text',
		required: false,
	},
	{
		label: 'e-mail',
		labelId: 'email',
		required: true,
		errMessage: 'Podaj poprawny adres e-mail.',
		type: 'text',
		pattern: true,
	},
	{
		label: 'Wiadomość',
		labelId: 'message',
		required: true,
		textarea: true,
		errMessage: 'Wiadomość nie może być pusta.',
		type: 'text',
	},
];

const Form = () => {
	const [values, setValues] = useState({
		name: '',
		orgName: '',
		telNumber: '',
		email: '',
		message: '',
	});

	const handleSubmit = (e: any) => {
		e.preventDefault();
	};

	const changeHandler = (e: any) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	return (
		<form action='' className='md:mt-10 ' onSubmit={handleSubmit}>
			{formRows.map((row) => (
				<FormRow
					{...row}
					key={row.labelId}
					onChange={changeHandler}
					errMessage={row.errMessage}
				/>
			))}
			<button className='btn text-white w-full my-8 text-lg block mx-auto md:mt-10 md:max-w-[40%]'>
				Wyślij
			</button>
		</form>
	);
};

export default Form;
