import type { Snippet } from 'svelte';
import H1 from './H1.svelte';
import H2 from './H2.svelte';
import H3 from './H3.svelte';
import H4 from './H4.svelte';
import P from './P.svelte';

export type TypographyProps = {
	class?: string;
	children?: Snippet<[]>;
};

export { H1, H2, H3, H4, P };
