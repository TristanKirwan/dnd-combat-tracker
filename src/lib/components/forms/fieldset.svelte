<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		class: className,
		label,
		id
	}: {
		children: Snippet;
		class?: string;
		label: string;
		id: string;
	} = $props();
</script>

<label class="flex flex-col gap-y-2 {className}">
	<span class="font-bold">{label}</span>
	<div>
		{@render children()}
	</div>
</label>
