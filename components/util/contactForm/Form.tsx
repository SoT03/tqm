import { useRef, useState } from 'react';
import FormRow from './FormRow';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

const formRows = [
	{
		label: 'Imię i nazwisko',
		labelId: 'name',
		required: false,
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
	const form = useRef(null);
	const [formStatus, setFormStatus] = useState(0);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_ID!,
				process.env.NEXT_PUBLIC_template!,
				form.current!,
				{
					publicKey: process.env.NEXT_PUBLIC_KEY,
				}
			)
			.then(
				() => {
					setFormStatus(1);
				},
				(error) => {
					alert(`Wysyłanie nie powiodło się ${error.text}`);
				}
			);
	};

	return (
		<form
			ref={form}
			onReset={() => {
				setFormStatus(0);
			}}
			className='relative md:mt-10 '
			onSubmit={handleSubmit}>
			<div className='xl:flex flex-wrap  justify-around xl:max-w-[900px] xl:m-auto'>
				{formRows.map((row) => (
					<FormRow {...row} key={row.labelId} errMessage={row.errMessage} />
				))}
			</div>
			<div className='md:my-12 lg:text-black xl:max-w-[800px] xl:m-auto'>
				<div className='mb-8'>
					<input
						required
						type='checkbox'
						name='check1'
						id='check1'
						className='mr-4 mb-2'
					/>
					<label htmlFor='check1'>
						<span className='text-red-600'>*</span> Oświadczam, że zapoznałem
						się z{' '}
						<Link
							href='politykaprywatnosci'
							className='underline text-sky-500 hover:text-sky-300 duration-300 transition-colors'>
							Polityką Prywatności
						</Link>{' '}
						TQM Partners Sp. z o. o. z siedzibą w Lesznie i wyrażam zgodę na
						przetwarzanie moich danych osobowych zawartych w formularzu w celu
						udzielenia odpowiedzi na przesłane zapytanie.{' '}
					</label>
				</div>
				<div className=''>
					<input
						type='checkbox'
						name='check2'
						id='check2'
						className='mr-4 mb-2'
					/>
					<label htmlFor='check2'>
						Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w
						formularzu TQM Partners Sp. z o. o. z siedzibą w Lesznie w celu
						prowadzenia działalności marketingowej. Zdaję sobie sprawę, że mam
						prawo dostępu do treści swoich danych oraz ich poprawiania. Podanie
						danych osobowy jest dobrowolne.
					</label>
				</div>
			</div>
			<div>
				<button className='btn text-white w-full my-8 text-lg block mx-auto md:mt-10 md:max-w-[40%]'>
					Wyślij
				</button>
			</div>
			{formStatus && (
				<div className='fixed top-0 left-0 w-full h-screen z-40 flex items-center justify-center  '>
					<div className='bg-white relative z-50 mx-1 rounded-md p-8 max-w-[420px] md'>
						<p className='mb-4 text-black'>
							Wiadomość została wysłana pomyślnie.
						</p>
						<button className='btn w-full text-white' type='reset'>
							Powrót
						</button>
					</div>
					<div className='bg-shadow'></div>
				</div>
			)}
		</form>
	);
};

export default Form;
