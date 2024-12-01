<script lang="ts">
	import { Toaster } from '$components/feedback';
	import '$src/app.css';
	import { ContactForm } from '$src/routes/_components';

	let { children } = $props();
</script>

<div
	class="min-h-screen w-full md:mx-auto md:w-[80vw] xl:w-[75vw] 2xl:w-[70vw]"
>
	<Toaster />

	<main
		id="content"
		class="p-4"
	>
		{@render children()}

		<ContactForm />
	</main>
</div>
