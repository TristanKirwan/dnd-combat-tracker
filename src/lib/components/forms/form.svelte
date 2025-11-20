<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		title,
		description,
		onsubmit
	}: {
		children: Snippet;
		title?: string;
		description?: string;
		onsubmit: (event: SubmitEvent) => void;
	} = $props();
</script>

<form
	class="flex flex-col gap-y-4 rounded-lg border border-background-300 bg-background-200 px-5 py-6 shadow-sm"
	{onsubmit}
>
	{#if title || description}
		<div>
			{#if title}
				<span class="text-heading-6 font-bold">{title}</span>
			{/if}
			{#if description}
				<p class="text-foreground-300">{description}</p>
			{/if}
		</div>
	{/if}
	{@render children()}
</form>
