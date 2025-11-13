<script>
	import Form from './forms/form.svelte';
	import Fieldset from './forms/fieldset.svelte';
	import TextInput from './forms/textinput.svelte';
	import Button from './button.svelte';
</script>

<Form title="Add combatant" description="Enter in the information of a reoccuring combatant.">
	<Fieldset label="Name" id="name">
		<TextInput id="name" placeholder="Combatant name" />
	</Fieldset>
	<div class="grid grid-cols-2 gap-x-4">
		<Fieldset label="Armor class" id="armor-class">
			<TextInput type="number" id="number" placeholder="14" min={0} max={25} step={1} />
		</Fieldset>
		<Fieldset label="Maximum HP" id="max-hp">
			<TextInput type="number" id="number" placeholder="50" min={0} max={500} step={1} />
		</Fieldset>
	</div>
	<Fieldset label="Notes" id="notes">
		<TextInput type="text" id="notes" placeholder="Additional notes" />
	</Fieldset>
	<div class="flex justify-center gap-x-4">
		<Button type="submit">Add</Button>
		<Button type="reset" variant="outline">Cancel</Button>
	</div>
</Form>
