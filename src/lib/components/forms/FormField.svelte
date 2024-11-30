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
	import type { WithElementRef, WithoutChildren } from 'bits-ui';
	import { Field, type FieldProps } from 'formsnap';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		form,
		name,
		children: childrenProp,
		...restProps
	}: FieldProps<T, U> &
		WithoutChildren<WithElementRef<HTMLAttributes<HTMLDivElement>>> = $props();
</script>

<Field
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
</Field>
