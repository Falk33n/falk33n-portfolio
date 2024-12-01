<script lang="ts">
	import type { TypographyProps } from '$components';
	import { cn } from '$utils';

	let { class: className, children }: TypographyProps = $props();
</script>

<h1
	class={cn(
		'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
		className,
	)}
>
	{@render children?.()}
</h1>
