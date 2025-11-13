<script>
	let { class: className, children } = $props();
</script>

<div class="mx-auto max-w-site px-site {className}">
	{@render children()}
</div>
