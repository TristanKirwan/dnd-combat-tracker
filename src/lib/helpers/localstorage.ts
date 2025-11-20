// TODO: fix import alias
import type { Combatant } from '../../types/general';

export function getPresetCombatants() {
	const combatantsAsString = localStorage.getItem('preset-combatants');
	if (!combatantsAsString) return [];

	try {
		return JSON.parse(combatantsAsString);
	} catch (error) {
		console.error('Error getting preset combatants', error);
		return [];
	}
}

export function addPresetCombatant(combatant: Combatant) {
	const combatants = getPresetCombatants();
	combatants.push(combatant);
	localStorage.setItem('preset-combatants', JSON.stringify(combatants));
}
