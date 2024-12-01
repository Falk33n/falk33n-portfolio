import { CONTACT_SCHEMA } from '$utils';
import { type Actions } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const actions: Actions = {
	'send-email': async ({ request, url }) => {
		const form = await superValidate(request, zod(CONTACT_SCHEMA));
		const { data } = form;

		if (!form.valid) {
			return message(form, { message: 'Invalid form data' }, { status: 400 });
		}

		const res = await fetch(`${url.origin}/api/contact`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const resData: { message: string } = await res.json();
		if (res.ok) {
			return message(form, { message: resData.message });
		}
		return message(form, { message: resData.message }, { status: 500 });
	},
};
