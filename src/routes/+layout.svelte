<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import inter from '$lib/assets/Inter-var.ttf';
	import Navbar from '$lib/components/navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preload" href={inter} as="font" type="font/ttf" crossorigin />
</svelte:head>

<Navbar />

{@render children()}

<style>
	@font-face {
		font-family: 'Inter';
		src: url($lib/assets/Inter-var.ttf) format('ttf');
		font-weight: 100 900;
		font-style: normal;
		font-display: swap;
	}
</style>
