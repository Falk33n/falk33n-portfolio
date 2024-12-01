<script lang="ts">
	import { Contact, ModeToggle, Toaster } from '$components';
	import '$src/app.css';
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

		<Contact />
	</main>
</div>
