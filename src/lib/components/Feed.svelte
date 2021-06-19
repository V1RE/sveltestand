<script>
	import Post from '$lib/components/Post.svelte';
	export let posts;

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
		@apply py-6;
	}

</style>
