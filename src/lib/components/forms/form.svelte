<script>
	let { children, class: className, title, description } = $props();
</script>

<form
	class="flex flex-col gap-y-4 rounded-lg border border-background-300 bg-background-200 px-5 py-6 shadow-sm"
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
