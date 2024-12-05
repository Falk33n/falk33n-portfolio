<script lang="ts">
	import { P, SocialMedia } from '$components';
</script>

<footer
	class="flex flex-col items-center justify-center bg-secondary px-4 py-6 text-secondary-foreground"
>
	<nav aria-label="Footer navigation">
		<SocialMedia />
	</nav>

	<P class="text-xs font-medium text-muted-foreground">
		Created by Tim Falk &copy; {new Date().getFullYear()}
	</P>
</footer>
