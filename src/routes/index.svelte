<script context="module">
	import supabase from '$lib/db';

	export const load = async () => {
		let { data, error } = await supabase.from('Posts').select(`
    Content,
    Author (
      full_name,
      avatar_url
    )
  `);

		if (!error) {
			return {
				props: {
					data
				}
			};
		}

		return {
			status: error.code,
			error: new Error(error.message)
		};
	};

</script>

<script>
	import Feed from '$lib/components/Feed.svelte';
	export let data;

</script>

<div class="container">
	<div class="layout">
		<main class="main">
			<Feed posts={data} />
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
