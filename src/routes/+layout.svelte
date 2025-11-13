<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import inter from '$lib/assets/Inter-var.woff';
	import Navbar from '$lib/components/navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preload" href={inter} as="font" type="font/woff" crossorigin />
</svelte:head>

<Navbar />

{@render children()}

<style>
	@font-face {
		font-family: 'Inter';
		src: url($lib/assets/Inter-var.woff) format('woff');
		font-weight: 100 900;
		font-style: normal;
		font-display: swap;
	}
</style>
