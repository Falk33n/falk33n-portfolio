<script lang="ts">
	import { cn } from '$utils';
	import type { WithoutChild } from 'bits-ui';
	import { type DescriptionProps, Description } from 'formsnap';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: WithoutChild<DescriptionProps> = $props();
</script>

<Description
	bind:ref
	class={cn('text-sm text-muted-foreground', className)}
	{...restProps}
/>
