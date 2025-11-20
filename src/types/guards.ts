import type { Combatant } from './general';

export function isStringInput(input: unknown): input is string {
	return typeof input === 'string';
}

export function inputsAreString(
	inputs: Record<string, FormDataEntryValue>
): inputs is Record<string, string> {
	return Object.values(inputs).every(isStringInput);
}

export function isCombatant(
	obj: Record<'name' | 'notes' | 'armorClass' | 'maxHp', string | number>
): obj is Combatant {
	if (!obj || typeof obj !== 'object') return false;
	if (!obj.name || !isStringInput(obj.name)) return false;
	if (!obj.notes || !isStringInput(obj.notes)) return false;
	if (!obj.armorClass || !isStringInput(obj.armorClass)) return false;
	else if (obj.armorClass !== 'UNKNOWN' && isNaN(Number(obj.armorClass))) return false;
	if (!obj.maxHp || !isStringInput(obj.maxHp)) return false;
	else if (obj.maxHp !== 'UNKNOWN' && isNaN(Number(obj.maxHp))) return false;

	return true;
}
