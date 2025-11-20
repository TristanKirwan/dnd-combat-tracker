<script lang="ts">
	import type { Snippet } from 'svelte';
	let { class: className, children }: { class?: string; children: Snippet } = $props();
</script>

<div class="max-w-site px-site mx-auto {className}">
	{@render children()}
</div>
