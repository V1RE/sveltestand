<script>
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import supabase from '$lib/db';
	import { session } from '$app/stores';
	import { browser } from '$app/env';

	if (browser) {
		session.set(supabase.auth.session());
		supabase.auth.onAuthStateChange((_, supabaseSession) => {
			session.set(supabaseSession);
		});
	}

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
