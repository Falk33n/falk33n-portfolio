<script lang="ts">
	import {
		Button,
		Tooltip,
		TooltipContent,
		TooltipProvider,
		TooltipTrigger,
	} from '$components';
	import { Github, Linkedin, Mail } from 'lucide-svelte';
</script>

<ul
	role="menu"
	class="flex items-center justify-center gap-4"
>
	<li role="menuitem">
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>
					{#snippet child({ props })}
						<Button
							href="/contact"
							aria-label="Go to contact page"
							size="icon"
							{...props}
						>
							<Mail aria-hidden />
						</Button>
					{/snippet}
				</TooltipTrigger>
				<TooltipContent>Go to Contact page</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	</li>

	<li role="menuitem">
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>
					{#snippet child({ props })}
						<Button
							href="https://github.com/Falk33n"
							aria-label="Go to my GitHub profile, opens in a new tab"
							target="_blank"
							size="icon"
							{...props}
						>
							<Github aria-hidden />
						</Button>
					{/snippet}
				</TooltipTrigger>
				<TooltipContent>Go to GitHub profile</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	</li>

	<li role="menuitem">
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>
					{#snippet child({ props })}
						<Button
							href="https://www.linkedin.com/in/timfalkwebbdev/"
							aria-label="Go to my LinkedIn profile, opens in a new tab"
							target="_blank"
							size="icon"
							{...props}
						>
							<Linkedin aria-hidden />
						</Button>
					{/snippet}
				</TooltipTrigger>
				<TooltipContent>Go to LinkedIn profile</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	</li>
</ul>
