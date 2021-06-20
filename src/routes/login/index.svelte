<script context="module">
	import type { Load } from '@sveltejs/kit';

	const load: Load = async ({ session }) => {
		if (session.user) {
			return { redirect: '/', status: 302 };
		}
		return {};
	};

	export { load };

</script>

<script>
	import { session } from '$app/stores';
	import Auth from '$lib/layouts/Auth.svelte';
	import { goto } from '$app/navigation';
	import { post } from '$lib/utils';

	let email: string;
	let password: string;

	const signIn = async () => {
		const response = await post(`auth/login`, { email, password });
		// TODO handle network errors
		if (response.user) {
			$session.user = response.user;
			setTimeout(() => {
				goto('/');
			});
		}
	};

</script>

<Auth>
	<form on:submit|preventDefault={signIn} class="form">
		<label class="inputfield mb-4">
			<span>E-mailadres</span>
			<input
				type="email"
				required
				class="input"
				bind:value={email}
				placeholder="john.doe@email.com"
			/>
		</label>
		<label class="inputfield mb-8">
			<span>Wachtwoord</span>
			<input
				type="password"
				class="input"
				bind:value={password}
				placeholder="Minstens 6 characters"
				required
			/>
		</label>
		<button class="submit">
			<span class="submitText">Log in</span>
		</button>
	</form>
</Auth>

<style>
	.form {
		@apply flex;
		@apply flex-col;
	}

	.inputfield {
		@apply flex;
		@apply flex-col;
	}

	.input {
		@apply mt-1;
		@apply block;
		@apply w-full;
		@apply rounded-md;
		@apply border-gray-300;
		@apply focus:border-seagreen-300;
		@apply focus:ring;
		@apply focus:ring-seagreen-200;
		@apply focus:ring-opacity-50;
	}

	.submit {
		@apply block;
		@apply w-full;
		@apply bg-seagreen-500;
		@apply focus:bg-seagreen-600;
		@apply hover:bg-seagreen-600;
		@apply text-white;
		@apply px-4;
		@apply py-2;
		@apply font-bold;
		@apply rounded-md;
		@apply focus:ring;
		@apply focus:ring-seagreen-200;
		@apply focus:ring-opacity-50;
		@apply focus:outline-none;
	}

</style>
