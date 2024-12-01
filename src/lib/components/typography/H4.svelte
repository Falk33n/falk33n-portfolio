<script lang="ts">
	import type { TypographyProps } from '$components';
	import { cn } from '$utils';

	let { class: className, children }: TypographyProps = $props();
</script>

<h4 class={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)}>
	{@render children?.()}
</h4>
