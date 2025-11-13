<script>
	let { color } = $props();
	let colorName = color.split('--color-').pop();
	const shades = ['100', '200', '300', '400', '500'];
</script>

<div class="flex flex-col gap-y-2">
	<div class="capitalize">{colorName}</div>
	<ol class="flex flex-wrap gap-x-2 gap-y-1">
		{#each shades as shade}
			<li class="flex flex-col items-center gap-y-1">
				<div
					class="h-4 w-4 rounded-sm md:h-10 md:w-10"
					style="background-color: var(--color-{color}-{shade});"
				></div>
				<span>{shade}</span>
			</li>
		{/each}
	</ol>
</div>
