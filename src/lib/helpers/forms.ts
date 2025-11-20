import { isStringInput } from '../../types/guards';

export function inputsAreString(
	inputs: Record<string, FormDataEntryValue>
): inputs is Record<string, string> {
	const values = Object.values(inputs);
	return values.every(isStringInput);
}
