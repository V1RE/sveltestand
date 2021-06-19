<script>
	import supabase from '$lib/db';
	import Auth from '$lib/layouts/Auth.svelte';
	import { goto } from '$app/navigation';

	let email: string;
	let password: string;

	const signUp = async () => {
		try {
			const { error } = await supabase.auth.signUp({
				email,
				password
			});
			if (error) {
				throw error;
			} else {
				goto('/');
			}
		} catch (error) {
			console.error(error);
		}
	};

</script>

<Auth>
	<form on:submit|preventDefault={signUp} class="form">
		<label class="label">
			<span>E-mailadres</span>
			<input type="email" class="email" bind:value={email} />
		</label>
		<label class="label">
			<span>Wachtwoord</span>
			<input type="password" class="password" bind:value={password} />
		</label>
		<button class="submit">Wachtwoord bevestigen</button>
	</form>
</Auth>
