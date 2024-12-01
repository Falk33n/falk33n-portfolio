<script lang="ts">
	import { Toaster } from '$components/feedback';
	import { ModeToggle } from '$components/themes';
	import '$src/app.css';
	import { ContactForm } from '$src/routes/_components';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<div
	class="min-h-screen w-full md:mx-auto md:w-[80vw] xl:w-[75vw] 2xl:w-[70vw]"
>
	<ModeWatcher />
	<Toaster />

	<main
		id="content"
		class="p-4"
	>
		<ModeToggle />

		{@render children()}

		<ContactForm />
	</main>
</div>
