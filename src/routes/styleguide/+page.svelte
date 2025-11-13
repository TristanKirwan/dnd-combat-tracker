<script>
	import Container from '$lib/components/container.svelte';
	import ColorBlocks from '$lib/components/color-blocks.svelte';

	const colors = ['black', 'white', 'primary'];
	const headings = [
		'heading-1',
		'heading-2',
		'heading-3',
		'heading-4',
		'heading-5',
		'heading-6',
		'paragraph'
	];
</script>

<Container class="flex flex-col gap-y-2">
	{#each colors as color}
		<ColorBlocks {color} />
	{/each}
	{#each headings as heading}
		<span class="text-{heading}">The quick brown fox jumps over the lazy dog</span>
	{/each}

	<div
		class="text-heading-1 text-heading-2 text-heading-3 text-heading-4 text-heading-5 text-heading-6 text-paragraph"
	></div>
</Container>
