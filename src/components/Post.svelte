<script>
	export let post;

	let { content } = post;

</script>

<article class="post">
	<div class="profile" />
	<p class="content">{content}</p>
	<div class="buttonbar" />
	<div class="comments" />
</article>

<style>
	.post {
		@apply bg-white;
		@apply border-olive-900;
		@apply border;
		@apply rounded-lg;
		@apply border-black;
		@apply p-8;
	}

</style>
