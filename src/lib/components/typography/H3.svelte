<script lang="ts">
	import type { TypographyProps } from '$components/typography';
	import { cn } from '$utils';

	let { class: className, children }: TypographyProps = $props();
</script>

<h3 class={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)}>
	{@render children?.()}
</h3>
