import { SECRET_GMAIL_EMAIL, SECRET_GMAIL_PSW } from '$env/static/private';
import { CONTACT_SCHEMA, type ContactSchema } from '$utils';
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

export const POST: RequestHandler = async ({ request }) => {
	const input: z.infer<ContactSchema> = await request.json();

	const result = CONTACT_SCHEMA.safeParse(input);
	if (!result.success) {
		return error(400, { message: result.error.message });
	}
	const { fName, lName, email, msg, subject } = result.data;

	const emailMsg = {
		from: email,
		to: SECRET_GMAIL_EMAIL,
		subject: `PORTFOLIO: ${subject}`,
		text: msg,
		html: `
      <p>${fName} ${lName}</p>
      <p>${email}</p>
      <h1>${subject}</h1>
      <p>${msg}</p>
    `,
	};

	await transporter.sendMail(emailMsg);

	return json({ message: 'Successfully sent email!' }, { status: 200 });
};
