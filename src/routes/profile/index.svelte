<script>
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
	import { post } from '$lib/utils';

	const signOut = async () => {
		const response = await post(`auth/logout`, {});
		// TODO handle network errors
		if (response.user) {
			$session.user = response.user;
			setTimeout(() => {
				goto('/');
			});
		}
	};
</script>

<div class="container">
	<form action="/auth/logout" method="get" on:submit|preventDefault={signOut}>
		<button>Log out</button>
	</form>
</div>
