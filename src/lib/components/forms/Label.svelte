<script lang="ts">
	import { cn } from '$utils';
	import { Label, type LabelRootProps } from 'bits-ui';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: LabelRootProps = $props();
</script>

<Label.Root
	bind:ref
	class={cn(
		'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
		className,
	)}
	{...restProps}
/>
