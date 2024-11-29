import { SECRET_GMAIL_EMAIL, SECRET_GMAIL_PSW } from '$env/static/private';
import { error, json, type RequestHandler } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	secure: true,
	service: 'Gmail',
	auth: {
		user: SECRET_GMAIL_EMAIL,
		pass: SECRET_GMAIL_PSW,
	},
});

transporter.verify((err) => {
	if (err) {
		return json({ message: err }, { status: 500 });
	}
	return json({ message: 'Server is ready to take messages' }, { status: 200 });
});

const SCHEMA = z.object({
	fName: z.string({ message: 'First name is required.' }),
	lName: z.string({ message: 'Last name is required.' }),
	email: z
		.string({ message: 'Email is required.' })
		.email({ message: 'You need to enter a valid email.' }),
	subject: z.string({ message: 'Subject is required.' }),
	msg: z.string({ message: 'Message is required.' }),
});

export const POST: RequestHandler = async ({ request }) => {
	const input: {
		fName: string;
		lName: string;
		email: string;
		subject: string;
		msg: string;
	} = await request.json();

	const result = SCHEMA.safeParse(input);
	if (!result.success) {
		return error(400, { message: result.error.message });
	}
	const { fName, lName, email, msg, subject } = result.data;

	const emailMsg = {
		from: email,
		to: SECRET_GMAIL_EMAIL,
		subject: `PORTFOLIO: ${subject}`,
		text: msg,
		// First and last name, email, subject, and the message with newlines in between
		html: `<p>${fName} ${lName}</p>\n<p>${email}</p>\n<h1>${subject}</h1>\n<p>${msg}</p>`,
	};

	await transporter.sendMail(emailMsg);

	return json({ message: 'Successfully sent email!' }, { status: 200 });
};
