<script>
	import supabase from '$lib/db';
	import Icon from '$lib/components/Icon.svelte';
	import { faGoogle } from '@fortawesome/free-brands-svg-icons';

	const signInGoogle = async () => {
		await supabase.auth.signIn({ provider: 'google' });
	};

</script>

<div class="container">
	<section class="auth">
		<div class="logo" />
		<ul class="providers">
			<Icon icon={faGoogle} on:click={signInGoogle} />
		</ul>
		<div class="form">
			<slot />
		</div>
	</section>
</div>

<style>
	.auth {
		@apply max-w-sm;
		@apply flex;
		@apply flex-col;
		@apply mx-auto;
		@apply mt-16;
	}

	.form {
		@apply rounded-lg;
		@apply border-seagreen;
		@apply border-2;
		@apply p-8;
	}

</style>
