<script lang="ts">
	import { Button, type ButtonProps } from '$components/forms';

	let { ref = $bindable(null), ...restProps }: ButtonProps = $props();
</script>

<Button
	bind:ref
	type="submit"
	{...restProps}
/>
