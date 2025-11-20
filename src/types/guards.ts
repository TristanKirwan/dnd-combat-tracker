export function isStringInput(input: string | File): input is string {
	return typeof input === 'string';
}
