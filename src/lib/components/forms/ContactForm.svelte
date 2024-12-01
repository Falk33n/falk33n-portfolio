<script
	lang="ts"
	module
>
	const data: SuperValidated<Infer<ContactSchema>> = await superValidate(
		zod(CONTACT_SCHEMA),
	);
</script>

<script lang="ts">
	import {
		FormButton,
		FormControl,
		FormField,
		FormFieldErrors,
		FormLabel,
		H2,
		Input,
	} from '$components';
	import { CONTACT_FIELDS, CONTACT_SCHEMA, type ContactSchema } from '$utils';
	import { toast } from 'svelte-sonner';
	import {
		type Infer,
		superForm,
		superValidate,
		type SuperValidated,
	} from 'sveltekit-superforms';
	import { zod, zodClient } from 'sveltekit-superforms/adapters';

	let retries = $state(0);

	const form = superForm(data, {
		onResult: ({ result }) => {
			retries += 1;

			if (result.type === 'success') {
				form.reset();
				toast.success('Successfully sent email!');
				return;
			}

			if (retries >= 3) {
				toast.error(
					'You have reached the maximum number of retries. Please try again later.',
				);
				form.reset();
				setTimeout(() => (retries = 0), 300000); // 5 minutes
			}
		},
		validators: zodClient(CONTACT_SCHEMA),
	});
	const { form: formData, enhance, allErrors } = form;
</script>

<section>
	<H2 class="mb-4">Send me a message</H2>

	<form
		use:enhance
		method="POST"
		action="?/sdsaend-email"
		class="flex w-full flex-col gap-4 md:flex-row md:flex-wrap md:justify-between md:gap-x-12"
	>
		{#each CONTACT_FIELDS as field}
			<FormField
				{form}
				name={field.name}
				class="md:w-[calc(50%-2rem)] md:max-w-[600px]"
			>
				<FormControl>
					{#snippet children({ props })}
						<FormLabel>{field.label}</FormLabel>

						<Input
							{...props}
							autocomplete={field.autocomplete ?? 'off'}
							type={field.type ?? 'text'}
							bind:value={$formData[field.name]}
						/>
					{/snippet}
				</FormControl>

				<FormFieldErrors />
			</FormField>
		{/each}

		<div class="md:[flex-basis:100%]">
			<FormButton
				disabled={$allErrors.length > 0 || retries >= 3}
				class="max-md:w-full">Submit</FormButton
			>
		</div>
	</form>
</section>
