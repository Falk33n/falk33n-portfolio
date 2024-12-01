<script lang="ts">
	import {
		Button,
		Tooltip,
		TooltipContent,
		TooltipProvider,
		TooltipTrigger,
	} from '$components';
	import { Moon, Sun } from 'lucide-svelte/icons';
	import { mode, toggleMode } from 'mode-watcher';

	const Icon = $derived($mode === 'dark' ? Sun : Moon);
	const title = $derived(
		$mode === 'dark' ? 'Change to light mode' : 'Change to dark mode',
	);
</script>

<TooltipProvider>
	<Tooltip>
		<TooltipTrigger onclick={toggleMode}>
			{#snippet child({ props })}
				<Button
					variant="outline"
					aria-live="polite"
					aria-label={title}
					size="icon"
					{...props}
				>
					<Icon class="size-[1.2rem] transition-all dark:-rotate-90" />
				</Button>
			{/snippet}
		</TooltipTrigger>
		<TooltipContent>
			{title}
		</TooltipContent>
	</Tooltip>
</TooltipProvider>
