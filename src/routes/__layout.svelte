<script context="module">
	import type { Load } from '@sveltejs/kit';

	const load: Load = async ({ session, page }) => {
		if (!session.user && page.path !== '/register') {
			return { redirect: '/register', status: 302 };
		}
		return {};
	};

	export { load };

</script>

<script>
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import { session } from '$app/stores';

</script>

<div class="grid grid-rows-[auto,1fr,auto] min-h-screen bg-gray-50">
	<Header />
	<main>
		<slot />
	</main>
	<div class="container">
		<h1>{$session?.user?.email}</h1>
	</div>
</div>
