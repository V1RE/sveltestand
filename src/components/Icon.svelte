<script>
	import type { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
	import Fa from 'svelte-fa';

	export let icon: IconDefinition;

</script>

<a href="/" class="icon">
	<Fa {icon} />
</a>

<style>
	.icon {
		@apply flex;
		@apply justify-center;
		@apply items-center;
		@apply p-1;
	}

</style>
