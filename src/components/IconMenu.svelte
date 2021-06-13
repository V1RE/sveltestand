<script>
	import { faBell } from '@fortawesome/pro-regular-svg-icons';
	import Icon from './Icon.svelte';

</script>

<ul class="icons">
	<li>
		<Icon icon={faBell} />
	</li>
</ul>

<style>
	.icons {
		grid-area: icons;

		@apply text-lg;
	}

</style>
