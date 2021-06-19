<script>
	import supabase from '$lib/db';
	import Icon from '$lib/components/Icon.svelte';
	import { faGoogle } from '@fortawesome/free-brands-svg-icons';

	const signInGoogle = async () => {
		await supabase.auth.signIn({ provider: 'google' });
	};

</script>

<div class="container my-8">
	<div class="signup">
		<div class="logo" />
		<ul class="providers">
			<Icon icon={faGoogle} on:click={signInGoogle} />
		</ul>
		<div class="form">
			<slot />
		</div>
	</div>
</div>
