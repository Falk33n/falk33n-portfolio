import type { ContactSchema } from '$utils';
import type { FormPath, Infer } from 'sveltekit-superforms';

type ContactFieldData = {
	name: FormPath<Infer<ContactSchema>>;
	label: 'First name' | 'Last name' | 'Email address' | 'Subject' | 'Message';
	autocomplete?: 'given-name' | 'family-name' | 'email';
	type?: 'email';
};
export const CONTACT_FIELDS: ContactFieldData[] = [
	{ name: 'fName', label: 'First name', autocomplete: 'given-name' },
	{ name: 'lName', label: 'Last name', autocomplete: 'family-name' },
	{
		name: 'email',
		label: 'Email address',
		autocomplete: 'email',
		type: 'email',
	},
	{ name: 'subject', label: 'Subject' },
	{ name: 'msg', label: 'Message' },
];
