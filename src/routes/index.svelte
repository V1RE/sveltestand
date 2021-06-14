<script>
	import Feed from '../components/Feed.svelte';

</script>

<div class="container">
	<div class="layout">
		<main class="main">
			<Feed />
		</main>
		<aside class="sidebar" />
	</div>
</div>

<style>
	.layout {
		grid-template: 'main sidebar';
		grid-template-columns: 2fr 1fr;
		@apply grid;
		@apply gap-8;
		@apply min-h-full;
	}

	.main {
		grid-area: main;
	}

	.sidebar {
		grid-area: sidebar;
		@apply max-w-md;
	}

</style>
