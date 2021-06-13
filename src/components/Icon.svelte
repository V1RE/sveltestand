<script>
	import type { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
	import Fa from 'svelte-fa';

	export let icon: IconDefinition;
	export let href = '';

</script>

<li>
	{#if href}
		<a {href} class="icon">
			<Fa {icon} />
		</a>
	{:else}
		<button on:click class="icon">
			<Fa {icon} />
		</button>
	{/if}
</li>

<style>
	.icon {
		@apply flex;
		@apply justify-center;
		@apply items-center;
		@apply p-1;
		@apply hover:text-seagreen;
		@apply focus-visible:text-seagreen;
	}

</style>
