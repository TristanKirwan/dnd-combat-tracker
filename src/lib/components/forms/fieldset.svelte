<script>
	let { children, class: className, label, id } = $props();
</script>

<label class="flex flex-col gap-y-2 {className}">
	<span class="font-bold">{label}</span>
	<div>
		{@render children()}
	</div>
</label>
