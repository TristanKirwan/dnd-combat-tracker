<script lang="ts">
	import Button from './button.svelte';
	import Fieldset from './forms/fieldset.svelte';
	import Form from './forms/form.svelte';
	import TextInput from './forms/textinput.svelte';

	import { addPresetCombatant } from '$lib/helpers/localstorage';
	import { inputsAreString, isCombatant } from '../../types/guards';

	function onsubmit(event: SubmitEvent) {
		if (!event.target) return;
		const formData = new FormData(event.target as HTMLFormElement);
		const combatant = {
			name: formData.get('name') || '',
			armorClass: formData.get('armor-class') || 'UNKNOWN',
			maxHp: formData.get('max-hp') || 'UNKNOWN',
			notes: formData.get('notes') || ''
		};

		const isStringInputs = inputsAreString(combatant);
		if (!isStringInputs || !isCombatant(combatant)) {
			// TODO: make pretty notification
			alert('Invalid inputs');
			return;
		}

		addPresetCombatant(combatant);

		// TODO: Make nice notification
		alert('Combatant added');
		(event.currentTarget as HTMLFormElement)?.reset();
	}
</script>

<Form
	title="Add combatant"
	description="Enter in the information of a reoccuring combatant."
	{onsubmit}
>
	<Fieldset label="Name" id="name">
		<TextInput type="text" id="name" name="name" placeholder="Combatant name" />
	</Fieldset>
	<div class="grid grid-cols-2 gap-x-4">
		<Fieldset label="Armor class" id="armor-class">
			<TextInput
				type="number"
				id="number"
				name="armor-class"
				placeholder="14"
				min={0}
				max={25}
				step={1}
			/>
		</Fieldset>
		<Fieldset label="Maximum HP" id="max-hp">
			<TextInput
				type="number"
				id="number"
				name="max-hp"
				placeholder="50"
				min={0}
				max={500}
				step={1}
			/>
		</Fieldset>
	</div>
	<Fieldset label="Notes" id="notes">
		<TextInput type="text" id="notes" name="notes" placeholder="Additional notes" />
	</Fieldset>
	<div class="flex justify-center gap-x-4">
		<Button type="submit">Add</Button>
		<Button type="reset" variant="outline">Cancel</Button>
	</div>
</Form>
