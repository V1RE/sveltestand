<script>
	import Branding from './Branding.svelte';

</script>

<nav class="layout">
	<Branding />
</nav>

<style>
	.layout {
		grid-template:
			'logo . icons' /
			auto 1fr auto;

		@screen lg {
			grid-template:
				'logo themes search support icons' /
				auto auto 1fr auto auto;
		}

		@apply gap-4;
		@apply md:gap-12;
		@apply lg:gap-16;

		@apply grid;
		@apply place-items-center;
	}

</style>
