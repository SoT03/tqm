import FormRow from './FormRow';

const formRows = [
	{
		label: 'Imię i nazwisko',
		labelId: 'Name',
		required: true,
	},
	{
		label: 'Nazwa oragnizacji',
		labelId: 'OrgName',
	},
	{
		label: 'Nr. telefonu',
		labelId: 'TelNumber',
	},
	{
		label: 'e-mail',
		labelId: 'email',
		required: true,
	},
	{
		label: 'Wiadomość',
		labelId: 'message',
		required: true,
		textarea: true,
	},
];

const Form = () => {
	return (
		<form action=''>
			{formRows.map((row) => (
				<FormRow data={row} key={row.labelId} />
			))}
		</form>
	);
};

export default Form;
