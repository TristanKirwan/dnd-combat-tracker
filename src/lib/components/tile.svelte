<script>
	let { children, class: className } = $props();
</script>

<div class="rounded-lg bg-background-200 p-4 shadow-sm {className}">
	{@render children()}
</div>
