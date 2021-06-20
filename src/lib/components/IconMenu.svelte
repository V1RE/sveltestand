<script>
	import { faBars, faBell, faUser } from '@fortawesome/pro-regular-svg-icons';
	import Icon from '$lib/components/Icon.svelte';

</script>

<ul class="icons">
	<Icon icon={faBell} />
	<Icon icon={faUser} href="/register" />
	<Icon icon={faBars} />
</ul>

<style>
	.icons {
		grid-area: icons;

		@apply text-lg;
		@apply grid;
		@apply grid-flow-col;
		@apply gap-4;
		@apply md:gap-6;
		@apply lg:gap-12;
	}

</style>
