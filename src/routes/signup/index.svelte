<script>
	import supabase from '$lib/db';

	let email: string;
	let password: string;

	const signUp = async () => {
		const { user, session: supabaseSession, error } = await supabase.auth.signUp({
			email,
			password
		});
	};

</script>

<div class="container">
	<div class="signup">
		<div class="logo" />
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
	</div>
</div>
