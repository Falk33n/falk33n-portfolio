<script
	lang="ts"
	module
>
	import type { FormPathLeaves } from 'sveltekit-superforms';
</script>

<script
	lang="ts"
	generics="T extends Record<string, unknown>, U extends FormPathLeaves<T>"
>
	import { cn } from '$utils';
	import type { WithElementRef, WithoutChildren } from 'bits-ui';
	import { type ElementFieldProps, ElementField } from 'formsnap';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		form,
		name,
		children: childrenProp,
		...restProps
	}: WithoutChildren<WithElementRef<HTMLAttributes<HTMLDivElement>>> &
		ElementFieldProps<T, U> = $props();
</script>

<ElementField
	{form}
	{name}
>
	{#snippet children({ constraints, errors, tainted, value })}
		<div
			bind:this={ref}
			class={cn('space-y-2', className)}
			{...restProps}
		>
			{@render childrenProp?.({
				constraints,
				errors,
				tainted,
				value: value as T[U],
			})}
		</div>
	{/snippet}
</ElementField>
