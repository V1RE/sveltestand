<script>
	import NavBar from './NavBar.svelte';

	let scrollY: number;

</script>

<svelte:window bind:scrollY />

<header class="header" class:header--scrolled={scrollY >= 300}>
	<div class="wrapper">
		<NavBar />
	</div>
</header>

<style>
	.header {
		@apply backdrop-blur-0;
		@apply backdrop-filter;
		@apply transition;
		@apply bg-white;
		@apply sticky;
		@apply top-0;

		&--scrolled {
			@apply bg-opacity-90;
			@apply backdrop-blur-md;
		}
	}

	.wrapper {
		@apply container;
		@apply mx-auto;
		@apply p-4;
		@apply md:py-8;
	}

</style>
