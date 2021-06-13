<script>
	import type { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
	import Fa from 'svelte-fa';

	export let icon: IconDefinition;

</script>

<a href="/">
	<div class="square">
		<Fa {icon} />
	</div>
</a>

<style>
	a {
		@apply flex;
		@apply justify-center;
		@apply items-center;
		@apply p-1;
	}

	.square {
	}

</style>
