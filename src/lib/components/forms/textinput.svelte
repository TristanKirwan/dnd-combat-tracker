<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	let {
		id,
		placeholder,
		type,
		name,
		...rest
	}: {
		id: string;
		placeholder: string;
		type: 'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'url' | 'text';
	} & Omit<HTMLInputAttributes, 'id' | 'placeholder' | 'type'> = $props();
</script>

<input
	{type}
	{id}
	{name}
	{placeholder}
	class="w-full rounded-lg bg-background-300 text-foreground-200 shadow-sm"
	{...rest}
/>
