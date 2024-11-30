<script lang="ts">
	import { cn } from '$utils';
	import type { WithoutChild } from 'bits-ui';
	import { type FieldErrorsProps, FieldErrors } from 'formsnap';

	let {
		ref = $bindable(null),
		class: className,
		errorClasses,
		children: childrenProp,
		...restProps
	}: WithoutChild<FieldErrorsProps> & {
		errorClasses?: string | undefined | null;
	} = $props();
</script>

<FieldErrors
	bind:ref
	class={cn('text-sm font-medium text-destructive', className)}
	{...restProps}
>
	{#snippet children({ errors, errorProps })}
		{#if childrenProp}
			{@render childrenProp({ errors, errorProps })}
		{:else}
			{#each errors as error}
				<div
					{...errorProps}
					class={cn(errorClasses)}
				>
					{error}
				</div>
			{/each}
		{/if}
	{/snippet}
</FieldErrors>
