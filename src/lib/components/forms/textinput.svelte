<script>
	let { id, label, placeholder, type, ...rest } = $props();
</script>

<input
	{type}
	{id}
	{placeholder}
	class="w-full rounded-lg bg-background-300 text-foreground-200 shadow-sm"
	{...rest}
/>
