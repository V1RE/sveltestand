<script>
	import '../app.postcss';
	import Header from '../components/Header.svelte';

</script>

<div class="grid grid-rows-[auto,1fr,auto] min-h-screen bg-gray-50">
	<Header />
	<main>
		<slot />
	</main>
</div>
