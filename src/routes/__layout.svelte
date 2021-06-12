<script>
	import '../app.postcss';
	import Header from '../components/Header.svelte';

</script>

<div class="grid grid-rows-[auto,1fr,auto] min-h-screen">
	<Header />
	<main>
		<slot />
	</main>
</div>
