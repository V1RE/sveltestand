<script>
	export let profile;

	let src = profile?.avatar_url;
	let name = profile?.full_name;

</script>

<div class="profile">
	<img {src} alt={name} class="avatar" />
	<div class="text">
		<h1 class="name">{name}</h1>
		<slot />
	</div>
</div>

<style>
	.profile {
		@apply flex;
	}

	.avatar {
		@apply rounded-full;
		@apply h-16;
		@apply w-16;
		@apply mr-6;
		@apply object-cover;
	}

	.text {
		@apply flex;
		@apply flex-col;
		@apply justify-center;
	}

	.name {
		@apply text-2xl;
	}

</style>
