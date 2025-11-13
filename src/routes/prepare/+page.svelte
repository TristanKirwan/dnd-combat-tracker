<script>
	import Container from '$lib/components/container.svelte';
	import Tile from '$lib/components/tile.svelte';
	import CombatantEntryForm from '$lib/components/combatantEntryForm.svelte';
</script>

<main>
	<Container>
		<div class="grid gap-4 lg:grid-cols-2">
			<div class="flex max-w-lg flex-col gap-y-2 lg:justify-self-end">
				<h1 class="text-heading-2 font-bold">Prepare for an encounter</h1>
				<p>
					Enter reusable information for your encounters, such as player character information or
					NPC's that come up more often.
				</p>
			</div>
			<div class="w-full max-w-lg">
				<CombatantEntryForm />
			</div>
		</div>
	</Container>
</main>
