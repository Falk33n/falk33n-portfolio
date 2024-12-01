<script lang="ts">
	import type { TypographyProps } from '$components';
	import { cn } from '$utils';

	let { class: className, children }: TypographyProps = $props();
</script>

<p class={cn('leading-7 [&:not(:first-child)]:mt-6', className)}>
	{@render children?.()}
</p>
