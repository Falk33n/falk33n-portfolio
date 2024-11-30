<script
	lang="ts"
	module
>
	import type { FormPath } from 'sveltekit-superforms';
</script>

<script
	lang="ts"
	generics="T extends Record<string, unknown>, U extends FormPath<T>"
>
	import { cn } from '$utils';
	import type { WithoutChild } from 'bits-ui';
	import { Fieldset, type FieldsetProps } from 'formsnap';

	let {
		ref = $bindable(null),
		class: className,
		form,
		name,
		...restProps
	}: WithoutChild<FieldsetProps<T, U>> = $props();
</script>

<Fieldset
	bind:ref
	{form}
	{name}
	class={cn('space-y-2', className)}
	{...restProps}
/>
