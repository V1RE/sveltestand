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
	let checked: boolean = false;

	let checkbox: HTMLInputElement;

	const signUp = async () => {
		if (checked) {
			const response = await post(`auth/register`, { email, password });
			// TODO handle network errors
			if (response.user) {
				$session.user = response.user;
				setTimeout(() => {
					goto('/');
				});
			}
		}
	};

	const btnClick = (e: MouseEvent) => {
		if (!checked) {
			e.preventDefault();
			checkbox.focus();
		}
	};

</script>

<Auth>
	<form on:submit|preventDefault={signUp} class="form">
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
		<label class="accept mb-6">
			<input
				type="checkbox"
				required
				name="accept"
				class="check"
				bind:this={checkbox}
				bind:checked
			/>
			<span>
				Ik ga accoord met de
				<a href="https://google.com/" target="_blank" class="privacy">privacy voorwaarden</a>
			</span>
		</label>
		<button class="submit" class:isDisabled={!checked} on:click={btnClick}>
			<span class="submitText">Wachtwoord bevestigen</span>
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

		&.isDisabled {
			@apply cursor-not-allowed;
			@apply bg-gray-400;
		}
	}

	.accept {
		@apply text-xs;
		@apply flex;
		@apply select-none;
		@apply cursor-pointer;
		@apply self-start;
	}

	.check {
		@apply border-gray-300;
		@apply border-2;
		@apply text-seagreen-500;
		@apply focus:outline-none;
		@apply ring-seagreen-300;
		@apply ring-offset-1;
		@apply checked:border-none;
		@apply mr-2;
	}

	.privacy {
		@apply underline;
		@apply hover:text-seagreen-600;
		@apply focus:text-seagreen-600;
	}

</style>
