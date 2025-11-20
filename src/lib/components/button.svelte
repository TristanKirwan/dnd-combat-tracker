<script lang="ts">
	import type { Snippet } from 'svelte';

	interface ButtonProps extends StandardButtonProps {
		onclick?: () => void;
		type: 'button' | 'submit' | 'reset';
		target?: never;
		href?: never;
	}

	interface LinkButtonProps extends StandardButtonProps {
		href: string;
		target?: '_blank' | '_self' | '_parent' | '_top';
		onclick?: never;
		type?: never;
	}

	interface StandardButtonProps {
		children: Snippet;
		class?: string;
		variant?: 'default' | 'outline';
	}

	let {
		children,
		class: className,
		onclick,
		href,
		type = 'button',
		target = '_self',
		variant = 'default'
	}: ButtonProps | LinkButtonProps = $props();
</script>

{#if onclick || type !== 'button'}
	<button
		{onclick}
		{type}
		class={[
			'cursor-pointer rounded-lg border border-primary p-2 px-4 text-heading-6 font-bold transition-colors',
			variant === 'default' &&
				'bg-primary text-background hover:border-primary-200 hover:bg-primary-200',
			variant === 'outline' &&
				'bg-transparent text-foreground hover:bg-primary hover:text-background'
		]}
	>
		{@render children()}
	</button>
{:else if href}
	<a
		{href}
		{target}
		class="cursor-pointer rounded-lg border-foreground-300 bg-primary p-3 px-4 text-heading-6 font-bold text-background transition-colors hover:bg-primary-200"
	>
		{@render children()}
	</a>
{/if}
