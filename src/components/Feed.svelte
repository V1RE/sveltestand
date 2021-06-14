<script>
	import Post from './Post.svelte';
	let posts = [
		{
			content: 'Dit is een test'
		},
		{
			content: 'Nog een test'
		}
	];

</script>

<section class="posts">
	{#each posts as post}
		<Post {post} />
	{/each}
</section>

<style>
	.posts {
		@apply grid;
		@apply grid-flow-row;
		@apply gap-8;
	}

</style>
