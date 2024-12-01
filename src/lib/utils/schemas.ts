import { z } from 'zod';

export const CONTACT_SCHEMA = z.object({
	fName: z.string().min(1, { message: 'First name is required.' }).trim(),
	lName: z.string().min(1, { message: 'Last name is required.' }).trim(),
	email: z
		.string({ message: 'Email is required.' })
		.email({ message: 'You need to enter a valid email.' })
		.trim(),
	subject: z.string().min(1, { message: 'Subject is required.' }).trim(),
	msg: z.string().min(1, { message: 'Message is required.' }).trim(),
});
export type ContactSchema = typeof CONTACT_SCHEMA;
