<script>
	import Logo from './Logo.svelte';

</script>

<a href="/" class="brand">
	<Logo />
</a>

<style>
	.brand {
		grid-area: logo;
		@apply w-16;
		@apply lg:w-24;
	}

</style>
