<script>
	import ProfileBar from '$lib/components/ProfileBar.svelte';

	export let post;

	let { Content } = post;

</script>

<article class="post">
	<div class="profile">
		<ProfileBar profile={post?.Author} />
	</div>
	<p class="content">{Content}</p>
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
		@apply flex;
		@apply flex-col;
	}

	.profile {
		@apply mb-4;
	}

</style>
