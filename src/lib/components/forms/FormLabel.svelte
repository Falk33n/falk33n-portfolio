<script lang="ts">
	import { cn } from '$utils';
	import type { WithoutChild } from 'bits-ui';
	import { Label, type LabelProps } from 'formsnap';

	let {
		ref = $bindable(null),
		children,
		class: className,
		...restProps
	}: WithoutChild<LabelProps> = $props();
</script>

<Label
	{...restProps}
	bind:ref
>
	{#snippet child({ props })}
		<Label
			{...props}
			class={cn('data-[fs-error]:text-destructive', className)}
		>
			{@render children?.()}
		</Label>
	{/snippet}
</Label>
